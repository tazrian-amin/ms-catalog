"use client";

import React, { useState } from "react";
import { ScreenContainer } from "./ScreenContainer";
import { NumericField } from "./NumericField";
import { ActionButton } from "./ActionButton";
import styles from "./MixingControlScreen.module.css";

interface MixingControlScreenProps {
  compact?: boolean;
}

export const MixingControlScreen: React.FC<MixingControlScreenProps> = ({
  compact = false,
}) => {
  const [additivePercent, setAdditivePercent] = useState(0);
  const [virginSampleWeight, setVirginSampleWeight] = useState(0);
  const [isFeeding, setIsFeeding] = useState(false);
  const [isPurging, setIsPurging] = useState(false);
  const [connectionState, setConnectionState] = useState<
    "disconnected" | "connecting" | "connected" | "error"
  >("disconnected");
  const [devices] = useState<string[]>(["USB Device"]); // Mock device for demo

  const handleIncrementAdditive = () =>
    setAdditivePercent((prev) => Math.min(prev + 0.1, 100));
  const handleDecrementAdditive = () =>
    setAdditivePercent((prev) => Math.max(prev - 0.1, 0));
  const handleIncrementWeight = () =>
    setVirginSampleWeight((prev) => Math.min(prev + 1, 9999));
  const handleDecrementWeight = () =>
    setVirginSampleWeight((prev) => Math.max(prev - 1, 0));

  // Check if values are valid (non-zero)
  const hasValidInputs = additivePercent > 0 && virginSampleWeight > 0;
  const isProcessRunning = isFeeding || isPurging;
  const isDeviceConnected = connectionState === "connected";

  const handleStop = () => {
    console.log("[Demo] STOP command", {
      additivePercent,
      virginSampleWeight,
      mode: isFeeding ? "feeding" : isPurging ? "purging" : "stopped",
    });
    setIsFeeding(false);
    setIsPurging(false);
  };

  const handleFeed = () => {
    console.log("[Demo] FEED_START command", {
      additivePercent,
      virginSampleWeight,
      mode: "feeding",
    });
    setIsFeeding(true);
    setIsPurging(false);
  };

  const handlePurge = () => {
    console.log("[Demo] PURGE_START command", {
      additivePercent,
      virginSampleWeight,
      mode: "purging",
    });
    setIsPurging(true);
    setIsFeeding(false);
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
    setIsFeeding(false);
    setIsPurging(false);
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
            label="% Additive (By Weight)"
            value={additivePercent}
            onIncrement={handleIncrementAdditive}
            onDecrement={handleDecrementAdditive}
            onChange={(newValue) =>
              setAdditivePercent(Math.max(0, Math.min(100, newValue)))
            }
            disabled={isProcessRunning}
          />
          <NumericField
            label="Virgin Sample Weight (Grams Per Cup)"
            value={virginSampleWeight}
            onIncrement={handleIncrementWeight}
            onDecrement={handleDecrementWeight}
            onChange={(newValue) =>
              setVirginSampleWeight(Math.max(0, Math.min(9999, newValue)))
            }
            disabled={isProcessRunning}
          />
        </div>
        <div className={styles.buttonContainer}>
          <ActionButton
            label="STOP"
            onPress={handleStop}
            variant="danger"
            disabled={!isProcessRunning}
          />
          <ActionButton
            label={isFeeding ? "FEEDING" : "FEED"}
            onPress={handleFeed}
            variant="primary"
            disabled={!hasValidInputs || isPurging || !isDeviceConnected}
          />
          <ActionButton
            label={isPurging ? "PURGING" : "PURGE"}
            onPress={handlePurge}
            variant="black"
            disabled={!hasValidInputs || isFeeding || !isDeviceConnected}
          />
        </div>
      </div>
    </ScreenContainer>
  );
};
