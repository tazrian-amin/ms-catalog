"use client";

import React, { useState } from "react";
import { ScreenContainer } from "./ScreenContainer";
import { NumericField } from "./NumericField";
import { ActionButton } from "./ActionButton";
import styles from "./MotorControlScreen.module.css";

interface MotorControlScreenProps {
  compact?: boolean;
}

export const MotorControlScreen: React.FC<MotorControlScreenProps> = ({
  compact = false,
}) => {
  const [stepsPerSecond, setStepsPerSecond] = useState(0);
  const [motorOnTime, setMotorOnTime] = useState(0);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isClockwise, setIsClockwise] = useState(true);
  const [connectionState, setConnectionState] = useState<
    "disconnected" | "connecting" | "connected" | "error"
  >("disconnected");
  const [devices] = useState<string[]>(["USB Device"]); // Mock device for demo

  const handleIncrementSteps = () =>
    setStepsPerSecond((prev) => Math.min(prev + 1, 9999));
  const handleDecrementSteps = () =>
    setStepsPerSecond((prev) => Math.max(prev - 1, 0));
  const handleIncrementMotorTime = () =>
    setMotorOnTime((prev) => Math.min(prev + 1, 9999));
  const handleDecrementMotorTime = () =>
    setMotorOnTime((prev) => Math.max(prev - 1, 0));

  // Check if values are valid (non-zero)
  const hasValidInputs = stepsPerSecond > 0 && motorOnTime > 0;
  const isDeviceConnected = connectionState === "connected";
  const canRun = hasValidInputs && isEnabled && isDeviceConnected;

  const handleRun = () => {
    if (isRunning) {
      // Stop the motor
      console.log("[Demo] MOTOR_STOP command", {
        stepsPerSecond,
        motorOnTime,
        enabled: isEnabled,
        direction: isClockwise ? "CW" : "CCW",
        running: false,
      });
      setIsRunning(false);
    } else {
      // Run the motor
      console.log("[Demo] MOTOR_RUN command", {
        stepsPerSecond,
        motorOnTime,
        enabled: isEnabled,
        direction: isClockwise ? "CW" : "CCW",
        running: true,
      });
      setIsRunning(true);
    }
  };

  const handleEnable = () => {
    setIsEnabled((prev) => !prev);
  };

  const handleToggleDirection = () => {
    setIsClockwise((prev) => !prev);
  };

  const handleConnect = () => {
    console.log("[Demo] Connecting...");
    setConnectionState("connecting");
    // Simulate connection after a short delay
    setTimeout(() => {
      setConnectionState("connected");
    }, 1000);
  };

  const handleDisconnect = () => {
    console.log("[Demo] Disconnecting...");
    setConnectionState("disconnected");
    setIsRunning(false);
  };

  const statusText =
    connectionState === "connected"
      ? "Device successfully connected via USB port"
      : connectionState === "connecting"
        ? "Connecting... Please grant USB permission"
        : connectionState === "error"
          ? "Connection lost, reconnect the device"
          : devices.length > 0
            ? "USB device detected. Tap Connect to establish connection."
            : "No device connected";

  return (
    <ScreenContainer compact={compact}>
      <div className={styles.headerSection}>
        <div className={styles.statusText}>{statusText}</div>
        {devices.length > 0 && connectionState !== "connected" && (
          <ActionButton
            label="CONNECT USB"
            onPress={handleConnect}
            variant="primary"
          />
        )}
        {connectionState === "connected" && (
          <ActionButton
            label="DISCONNECT"
            onPress={handleDisconnect}
            variant="danger"
          />
        )}
      </div>
      <div className={styles.section}>
        <div className={styles.numericFieldContainer}>
          <NumericField
            label="Steps Per Second"
            value={stepsPerSecond}
            onIncrement={handleIncrementSteps}
            onDecrement={handleDecrementSteps}
            onChange={(newValue) =>
              setStepsPerSecond(
                Math.max(0, Math.min(9999, Math.round(newValue))),
              )
            }
            disabled={isRunning}
          />
          <NumericField
            label="Motor On Time (Sec)"
            value={motorOnTime}
            onIncrement={handleIncrementMotorTime}
            onDecrement={handleDecrementMotorTime}
            onChange={(newValue) =>
              setMotorOnTime(Math.max(0, Math.min(9999, Math.round(newValue))))
            }
            disabled={isRunning}
          />
        </div>
        <div className={styles.buttonContainer}>
          <ActionButton
            label={isRunning ? "STOP" : "RUN"}
            onPress={handleRun}
            variant={isRunning ? "running" : "primary"}
            disabled={!isRunning && !canRun}
          />
          <ActionButton
            label={isEnabled ? "DISABLE" : "ENABLE"}
            onPress={handleEnable}
            variant="lightBlue"
            disabled={!hasValidInputs || isRunning}
          />
          <ActionButton
            label={isClockwise ? "CW" : "CCW"}
            onPress={handleToggleDirection}
            variant="secondary"
            disabled={!hasValidInputs || isRunning}
          />
        </div>
      </div>
    </ScreenContainer>
  );
};
