"use client";

import React from "react";
import styles from "./ScreenContainer.module.css";

interface ScreenContainerProps {
  children: React.ReactNode;
  compact?: boolean;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  compact = false,
}) => {
  return (
    <div
      className={styles.safeArea}
      style={compact ? { minHeight: "auto", height: "auto" } : undefined}
    >
      <div className={styles.scrollView}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.kicker}>COLOURMATE</div>
          </div>
          <div className={styles.content}>{children}</div>
        </div>
      </div>
    </div>
  );
};
