"use client";

import React, { useState, useRef, useMemo } from "react";
import styles from "./NumericField.module.css";

interface NumericFieldProps {
  label: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onChange?: (value: number) => void;
  disabled?: boolean;
}

export const NumericField: React.FC<NumericFieldProps> = ({
  label,
  value,
  onIncrement,
  onDecrement,
  onChange,
  disabled = false,
}) => {
  const formatValue = (val: number): string => {
    if (!Number.isFinite(val)) return "0";
    if (val % 1 !== 0) {
      return val.toFixed(1);
    }
    return val.toString();
  };

  const safeValue = Number.isFinite(value) ? value : 0;
  const formattedPropValue = useMemo(() => formatValue(safeValue), [safeValue]);
  const [editingValue, setEditingValue] = useState<string | null>(null);
  const [isIncrementPressed, setIsIncrementPressed] = useState(false);
  const [isDecrementPressed, setIsDecrementPressed] = useState(false);
  const isEditingRef = useRef(false);

  // Use editing value if user is typing, otherwise use formatted prop value
  const inputValue = editingValue !== null ? editingValue : formattedPropValue;

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    isEditingRef.current = true;
    const text = e.target.value;
    const numericRegex = /^\d*\.?\d*$/;
    if (!numericRegex.test(text) && text !== "") {
      return;
    }

    setEditingValue(text);

    if (text === "" || text === ".") {
      onChange?.(0);
      return;
    }

    const numValue = parseFloat(text);
    if (!isNaN(numValue)) {
      const normalized = Math.max(0, numValue);
      onChange?.(normalized);
    }
  };

  const handleBlur = () => {
    isEditingRef.current = false;
    const currentValue =
      editingValue !== null ? editingValue : formattedPropValue;

    if (currentValue === "" || currentValue === ".") {
      setEditingValue(null);
      onChange?.(0);
      return;
    }

    const numValue = parseFloat(currentValue);
    if (!isNaN(numValue)) {
      const normalized = Math.max(0, numValue);
      setEditingValue(null); // Clear editing state to use prop value
      onChange?.(normalized);
    } else {
      setEditingValue(null); // Reset to prop value on invalid input
    }
  };

  return (
    <div className={disabled ? styles.disabledContainer : ""}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={`${styles.input} ${disabled ? styles.disabledInput : ""}`}
          value={inputValue}
          onChange={handleTextChange}
          onBlur={handleBlur}
          placeholder="0"
          disabled={disabled}
        />
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${styles.greenButton} ${
              isIncrementPressed && !disabled ? styles.greenButtonPressed : ""
            } ${disabled ? styles.disabledButton : ""}`}
            onClick={onIncrement}
            onMouseDown={() => !disabled && setIsIncrementPressed(true)}
            onMouseUp={() => setIsIncrementPressed(false)}
            onMouseLeave={() => setIsIncrementPressed(false)}
            disabled={disabled}
          >
            <span
              className={`${styles.buttonText} ${styles.greenButtonText} ${
                isIncrementPressed && !disabled
                  ? styles.greenButtonTextPressed
                  : ""
              }`}
            >
              +
            </span>
          </button>
          <button
            className={`${styles.button} ${styles.redButton} ${
              isDecrementPressed && !disabled ? styles.redButtonPressed : ""
            } ${disabled ? styles.disabledButton : ""}`}
            onClick={onDecrement}
            onMouseDown={() => !disabled && setIsDecrementPressed(true)}
            onMouseUp={() => setIsDecrementPressed(false)}
            onMouseLeave={() => setIsDecrementPressed(false)}
            disabled={disabled}
          >
            <span
              className={`${styles.buttonText} ${styles.redButtonText} ${
                isDecrementPressed && !disabled
                  ? styles.redButtonTextPressed
                  : ""
              }`}
            >
              –
            </span>
          </button>
        </div>
      </div>
      <div className={styles.inputLabel}>{label}</div>
    </div>
  );
};
