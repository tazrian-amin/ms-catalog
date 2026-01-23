"use client";

import React from "react";
import styles from "./ActionButton.module.css";

interface ActionButtonProps {
  label: string;
  onPress: () => void;
  variant?:
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "lightBlue"
    | "black"
    | "running";
  disabled?: boolean;
}

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  onPress,
  variant = "primary",
  disabled = false,
}) => {
  const getButtonClass = (): string => {
    const baseClass = styles.button;
    const variantClass = styles[`${variant}Button`] || styles.primaryButton;
    const disabledClass = disabled ? styles.disabledButton : "";
    return `${baseClass} ${variantClass} ${disabledClass}`.trim();
  };

  const getTextClass = (): string => {
    const baseClass = styles.buttonText;
    const variantClass = styles[`${variant}Text`] || styles.primaryText;
    const disabledClass = disabled ? styles.disabledText : "";
    return `${baseClass} ${variantClass} ${disabledClass}`.trim();
  };

  return (
    <button className={getButtonClass()} onClick={onPress} disabled={disabled}>
      <span className={getTextClass()}>{label}</span>
    </button>
  );
};
