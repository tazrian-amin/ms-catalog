"use client";

import React, { useState } from "react";
import { Slider, Card, Statistic } from "antd";
import { ComponentExample } from "../../types";

// Basic Bin Component - Simple storage container visualization
interface BasicBinProps {
  fillLevel: number; // 0-100
  capacity: number; // total capacity in liters or kg
  unit?: string;
  material?: string;
  width?: number;
  height?: number;
  interactive?: boolean;
  onFillLevelChange?: (value: number) => void;
}

const BasicBin: React.FC<BasicBinProps> = ({
  fillLevel,
  capacity,
  unit = "L",
  material = "Material",
  width = 180,
  height = 220,
  interactive = false,
  onFillLevelChange,
}) => {
  const [currentFill, setCurrentFill] = useState(fillLevel);

  const handleSliderChange = (value: number) => {
    setCurrentFill(value);
    onFillLevelChange?.(value);
  };

  // Color based on fill level
  const getFillColor = () => {
    if (currentFill >= 90) return "#cf1322"; // Red - almost full
    if (currentFill >= 70) return "#faad14"; // Orange - getting full
    if (currentFill >= 30) return "#52c41a"; // Green - good level
    return "#1890ff"; // Blue - low level
  };

  const binTop = 30;
  const binBottom = height - 30;
  const binHeight = binBottom - binTop;
  const filledHeight = (currentFill / 100) * binHeight;
  const currentAmount = ((currentFill / 100) * capacity).toFixed(1);

  return (
    <div style={{ textAlign: "center" }}>
      {/* SVG Bin Visualization */}
      <svg
        width={width}
        height={height}
        style={{ display: "block", margin: "0 auto" }}
      >
        <defs>
          <linearGradient
            id="basicBinGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: "#595959", stopOpacity: 0.2 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#595959", stopOpacity: 0.4 }}
            />
          </linearGradient>
          <linearGradient
            id={`basicFillGradient-${currentFill}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: getFillColor(), stopOpacity: 0.7 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: getFillColor(), stopOpacity: 0.9 }}
            />
          </linearGradient>
        </defs>

        {/* Bin Container (Rectangle with slight taper) */}
        <rect
          x={width * 0.25}
          y={binTop}
          width={width * 0.5}
          height={binHeight}
          fill="url(#basicBinGradient)"
          stroke="#434343"
          strokeWidth="2"
          rx="5"
        />

        {/* Fill level */}
        {filledHeight > 0 && (
          <rect
            x={width * 0.25}
            y={binBottom - filledHeight}
            width={width * 0.5}
            height={filledHeight}
            fill={`url(#basicFillGradient-${currentFill})`}
            stroke="none"
            rx="5"
          />
        )}

        {/* Level markers */}
        {[25, 50, 75, 100].map((level) => {
          const y = binBottom - (level / 100) * binHeight;
          return (
            <g key={level}>
              <line
                x1={width * 0.1}
                y1={y}
                x2={width * 0.22}
                y2={y}
                stroke="#8c8c8c"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
              <text
                x={width * 0.05}
                y={y + 4}
                fontSize="10"
                fill="#595959"
                textAnchor="middle"
              >
                {level}
              </text>
            </g>
          );
        })}

        {/* Current fill percentage in the center */}
        <text
          x={width / 2}
          y={height / 2}
          fontSize="24"
          fontWeight="bold"
          fill="#262626"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {currentFill}%
        </text>

        {/* Material label at top */}
        <text
          x={width / 2}
          y={15}
          fontSize="12"
          fill="#595959"
          textAnchor="middle"
          fontWeight="500"
        >
          {material}
        </text>
      </svg>

      {/* Interactive slider */}
      {interactive && (
        <div style={{ marginTop: "16px", padding: "0 20px" }}>
          <Slider
            min={0}
            max={100}
            value={currentFill}
            onChange={handleSliderChange}
            marks={{ 0: "Empty", 50: "50%", 100: "Full" }}
          />
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Statistic
              title="Current"
              value={currentAmount}
              suffix={unit}
              styles={{ content: { fontSize: "16px" } }}
            />
            <Statistic
              title="Capacity"
              value={capacity}
              suffix={unit}
              styles={{ content: { fontSize: "16px" } }}
            />
            <Statistic
              title="Available"
              value={((capacity * (100 - currentFill)) / 100).toFixed(1)}
              suffix={unit}
              styles={{ content: { fontSize: "16px", color: "#52c41a" } }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Example Configurations
export const BasicBinExamples: ComponentExample[] = [
  {
    title: "Water Storage",
    description: "Basic water tank with current fill level",
    code: `<BasicBin 
  fillLevel={65} 
  capacity={1000} 
  unit="L"
  material="Water"
  width={180}
  height={220}
/>`,
    component: (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <BasicBin fillLevel={65} capacity={1000} unit="L" material="Water" />
      </div>
    ),
  },
  {
    title: "Grain Storage",
    description: "Grain storage bin showing high capacity",
    code: `<BasicBin 
  fillLevel={85} 
  capacity={5000} 
  unit="kg"
  material="Wheat"
  width={180}
  height={220}
/>`,
    component: (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <BasicBin fillLevel={85} capacity={5000} unit="kg" material="Wheat" />
      </div>
    ),
  },
  {
    title: "Chemical Storage",
    description: "Low fill level chemical storage",
    code: `<BasicBin 
  fillLevel={20} 
  capacity={500} 
  unit="L"
  material="Solvent"
  width={180}
  height={220}
/>`,
    component: (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <BasicBin fillLevel={20} capacity={500} unit="L" material="Solvent" />
      </div>
    ),
  },
  {
    title: "Multiple Bins",
    description: "Dashboard view with multiple storage bins",
    code: `<div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
  <BasicBin fillLevel={45} capacity={1000} unit="L" material="Tank A" width={150} height={200} />
  <BasicBin fillLevel={72} capacity={1000} unit="L" material="Tank B" width={150} height={200} />
  <BasicBin fillLevel={18} capacity={1000} unit="L" material="Tank C" width={150} height={200} />
  <BasicBin fillLevel={91} capacity={1000} unit="L" material="Tank D" width={150} height={200} />
</div>`,
    component: (
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          padding: "20px",
          flexWrap: "wrap",
        }}
      >
        <BasicBin
          fillLevel={45}
          capacity={1000}
          unit="L"
          material="Tank A"
          width={150}
          height={200}
        />
        <BasicBin
          fillLevel={72}
          capacity={1000}
          unit="L"
          material="Tank B"
          width={150}
          height={200}
        />
        <BasicBin
          fillLevel={18}
          capacity={1000}
          unit="L"
          material="Tank C"
          width={150}
          height={200}
        />
        <BasicBin
          fillLevel={91}
          capacity={1000}
          unit="L"
          material="Tank D"
          width={150}
          height={200}
        />
      </div>
    ),
  },
  {
    title: "Interactive Bin",
    description: "Interactive bin with slider control and statistics",
    code: `<BasicBin 
  fillLevel={60} 
  capacity={2000} 
  unit="L"
  material="Liquid Storage"
  interactive={true}
  width={200}
  height={240}
/>`,
    component: (
      <Card style={{ maxWidth: "500px", margin: "0 auto" }}>
        <BasicBin
          fillLevel={60}
          capacity={2000}
          unit="L"
          material="Liquid Storage"
          interactive={true}
          width={200}
          height={240}
        />
      </Card>
    ),
  },
];

export default BasicBin;
