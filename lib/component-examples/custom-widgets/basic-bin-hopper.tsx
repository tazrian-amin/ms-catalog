"use client";

import React, { useState } from "react";
import { Slider, Card, Statistic, Tag, Row, Col } from "antd";
import { ComponentExample } from "../../types";

// Industrial Hopper Component - For material handling and processing
interface IndustrialHopperProps {
  fillLevel: number; // 0-100
  capacity: number; // total capacity in tons or kg
  unit?: string;
  material?: string;
  width?: number;
  height?: number;
  interactive?: boolean;
  flowRate?: number; // material flow rate
  status?: "active" | "idle" | "warning";
  onFillLevelChange?: (value: number) => void;
}

const IndustrialHopper: React.FC<IndustrialHopperProps> = ({
  fillLevel,
  capacity,
  unit = "tons",
  material = "Material",
  width = 200,
  height = 280,
  interactive = false,
  flowRate = 0,
  status = "idle",
  onFillLevelChange,
}) => {
  const [currentFill, setCurrentFill] = useState(fillLevel);

  const handleSliderChange = (value: number) => {
    setCurrentFill(value);
    onFillLevelChange?.(value);
  };

  // Color based on fill level
  const getFillColor = () => {
    if (currentFill >= 85) return "#cf1322"; // Red - almost full
    if (currentFill >= 60) return "#faad14"; // Orange - getting full
    if (currentFill >= 30) return "#52c41a"; // Green - good level
    return "#1890ff"; // Blue - low level
  };

  const getStatusColor = () => {
    switch (status) {
      case "active":
        return "#52c41a";
      case "warning":
        return "#faad14";
      default:
        return "#8c8c8c";
    }
  };

  const hopperTop = 40;
  const hopperBottom = height - 60;
  const hopperHeight = hopperBottom - hopperTop;
  const filledHeight = (currentFill / 100) * hopperHeight;
  const currentAmount = ((currentFill / 100) * capacity).toFixed(1);

  return (
    <div style={{ textAlign: "center" }}>
      {/* Status indicator */}
      <div style={{ marginBottom: "8px" }}>
        <Tag color={getStatusColor()}>{status.toUpperCase()}</Tag>
        {flowRate > 0 && (
          <Tag color="blue">
            Flow: {flowRate} {unit}/hr
          </Tag>
        )}
      </div>

      {/* SVG Hopper Visualization */}
      <svg
        width={width}
        height={height}
        style={{ display: "block", margin: "0 auto" }}
      >
        <defs>
          <linearGradient id="hopperGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#434343", stopOpacity: 0.3 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#434343", stopOpacity: 0.6 }}
            />
          </linearGradient>
          <linearGradient
            id={`hopperFillGradient-${currentFill}`}
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
              style={{ stopColor: getFillColor(), stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        {/* Hopper Container (Inverted trapezoid - wide at top, narrow at bottom) */}
        <path
          d={`M ${width * 0.15} ${hopperTop} 
              L ${width * 0.85} ${hopperTop} 
              L ${width * 0.65} ${hopperBottom} 
              L ${width * 0.35} ${hopperBottom} Z`}
          fill="url(#hopperGradient)"
          stroke="#262626"
          strokeWidth="3"
        />

        {/* Fill level (matching hopper shape) */}
        {filledHeight > 0 && (
          <>
            <clipPath id={`hopperClip-${currentFill}`}>
              <path
                d={`M ${width * 0.15} ${hopperTop} 
                    L ${width * 0.85} ${hopperTop} 
                    L ${width * 0.65} ${hopperBottom} 
                    L ${width * 0.35} ${hopperBottom} Z`}
              />
            </clipPath>
            {(() => {
              // Calculate X coordinates at the fill level by interpolating along the slanted walls
              // The hopper is an inverted trapezoid: wide at top (0.15-0.85), narrow at bottom (0.35-0.65)
              // Progress from bottom up (where the fill surface is)
              const progressFromBottom = filledHeight / hopperHeight;
              // Left wall: from 0.35 (bottom) to 0.15 (top) as we go up
              const fillTopLeftX = 0.35 - (0.35 - 0.15) * progressFromBottom;
              // Right wall: from 0.65 (bottom) to 0.85 (top) as we go up
              const fillTopRightX = 0.65 + (0.85 - 0.65) * progressFromBottom;

              return (
                <path
                  d={`M ${width * fillTopLeftX} ${hopperBottom - filledHeight}
                      L ${width * fillTopRightX} ${hopperBottom - filledHeight}
                      L ${width * 0.65} ${hopperBottom}
                      L ${width * 0.35} ${hopperBottom} Z`}
                  fill={`url(#hopperFillGradient-${currentFill})`}
                />
              );
            })()}
          </>
        )}

        {/* Discharge outlet at bottom */}
        <rect
          x={width * 0.42}
          y={hopperBottom}
          width={width * 0.16}
          height={20}
          fill="#262626"
          stroke="#434343"
          strokeWidth="2"
        />

        {/* Active flow indicator */}
        {status === "active" && flowRate > 0 && (
          <>
            <line
              x1={width * 0.5}
              y1={hopperBottom + 20}
              x2={width * 0.5}
              y2={height - 20}
              stroke={getFillColor()}
              strokeWidth="4"
              strokeDasharray="4,4"
              opacity="0.7"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="0"
                to="8"
                dur="0.5s"
                repeatCount="indefinite"
              />
            </line>
          </>
        )}

        {/* Level markers */}
        {[25, 50, 75].map((level) => {
          const y = hopperBottom - (level / 100) * hopperHeight;
          const leftX = width * 0.15 + width * 0.7 * (1 - level / 100) * 0.3;
          return (
            <g key={level}>
              <line
                x1={leftX - 15}
                y1={y}
                x2={leftX - 5}
                y2={y}
                stroke="#8c8c8c"
                strokeWidth="1"
                strokeDasharray="2,2"
              />
              <text
                x={leftX - 20}
                y={y + 4}
                fontSize="10"
                fill="#595959"
                textAnchor="end"
              >
                {level}%
              </text>
            </g>
          );
        })}

        {/* Current fill percentage */}
        <text
          x={width / 2}
          y={hopperTop + hopperHeight / 2}
          fontSize="28"
          fontWeight="bold"
          fill="#262626"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {currentFill}%
        </text>

        {/* Material label */}
        <text
          x={width / 2}
          y={20}
          fontSize="12"
          fill="#595959"
          textAnchor="middle"
          fontWeight="600"
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
          <Row gutter={[16, 16]} style={{ marginTop: "12px" }}>
            <Col xs={24} sm={8}>
              <Statistic
                title="Current Load"
                value={currentAmount}
                suffix={unit}
                styles={{ content: { fontSize: "16px" } }}
              />
            </Col>
            <Col xs={24} sm={8}>
              <Statistic
                title="Capacity"
                value={capacity}
                suffix={unit}
                styles={{ content: { fontSize: "16px" } }}
              />
            </Col>
            <Col xs={24} sm={8}>
              <Statistic
                title="Available"
                value={((capacity * (100 - currentFill)) / 100).toFixed(1)}
                suffix={unit}
                styles={{ content: { fontSize: "16px", color: "#52c41a" } }}
              />
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

// Example Configurations
export const IndustrialHopperExamples: ComponentExample[] = [
  {
    title: "Coal Processing",
    description: "Active hopper discharging coal with flow rate",
    code: `<IndustrialHopper 
  fillLevel={70} 
  capacity={50} 
  unit="tons"
  material="Coal"
  flowRate={12}
  status="active"
  width={200}
  height={280}
/>`,
    component: (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <IndustrialHopper
          fillLevel={70}
          capacity={50}
          unit="tons"
          material="Coal"
          flowRate={12}
          status="active"
        />
      </div>
    ),
  },
  {
    title: "Cement Hopper",
    description: "High capacity cement hopper in idle state",
    code: `<IndustrialHopper 
  fillLevel={45} 
  capacity={100} 
  unit="tons"
  material="Cement"
  status="idle"
  width={200}
  height={280}
/>`,
    component: (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <IndustrialHopper
          fillLevel={45}
          capacity={100}
          unit="tons"
          material="Cement"
          status="idle"
        />
      </div>
    ),
  },
  {
    title: "Warning State",
    description: "Hopper with low fill level warning",
    code: `<IndustrialHopper 
  fillLevel={15} 
  capacity={75} 
  unit="tons"
  material="Aggregate"
  status="warning"
  width={200}
  height={280}
/>`,
    component: (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <IndustrialHopper
          fillLevel={15}
          capacity={75}
          unit="tons"
          material="Aggregate"
          status="warning"
        />
      </div>
    ),
  },
  {
    title: "Multiple Hoppers Dashboard",
    description: "Production line with multiple hoppers",
    code: `<div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
  <IndustrialHopper fillLevel={82} capacity={50} unit="tons" material="Hopper 1" status="active" flowRate={8} width={180} height={260} />
  <IndustrialHopper fillLevel={45} capacity={50} unit="tons" material="Hopper 2" status="idle" width={180} height={260} />
  <IndustrialHopper fillLevel={18} capacity={50} unit="tons" material="Hopper 3" status="warning" width={180} height={260} />
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
        <IndustrialHopper
          fillLevel={82}
          capacity={50}
          unit="tons"
          material="Hopper 1"
          status="active"
          flowRate={8}
          width={180}
          height={260}
        />
        <IndustrialHopper
          fillLevel={45}
          capacity={50}
          unit="tons"
          material="Hopper 2"
          status="idle"
          width={180}
          height={260}
        />
        <IndustrialHopper
          fillLevel={18}
          capacity={50}
          unit="tons"
          material="Hopper 3"
          status="warning"
          width={180}
          height={260}
        />
      </div>
    ),
  },
  {
    title: "Interactive Hopper",
    description: "Interactive hopper with slider control and statistics",
    code: `<Card style={{ maxWidth: "500px", margin: "0 auto" }}>
  <IndustrialHopper 
    fillLevel={65} 
    capacity={80} 
    unit="tons"
    material="Raw Material"
    interactive={true}
    flowRate={10}
    status="active"
    width={220}
    height={300}
  />
</Card>`,
    component: (
      <Card style={{ maxWidth: "500px", margin: "0 auto" }}>
        <IndustrialHopper
          fillLevel={65}
          capacity={80}
          unit="tons"
          material="Raw Material"
          interactive={true}
          flowRate={10}
          status="active"
          width={220}
          height={300}
        />
      </Card>
    ),
  },
];

export default IndustrialHopper;
