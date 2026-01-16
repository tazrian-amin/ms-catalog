"use client";

import React, { useState } from "react";
import { Slider, Card, Row, Col, Statistic } from "antd";
import { ComponentExample } from "../../types";

// Mining Bin Component
interface MiningBinProps {
  fillLevel: number; // 0-100
  capacity: number; // total capacity in tons
  material?: string;
  width?: number;
  height?: number;
  interactive?: boolean;
  onFillLevelChange?: (value: number) => void;
}

const MiningBin: React.FC<MiningBinProps> = ({
  fillLevel,
  capacity,
  material = "Ore",
  width = 200,
  height = 250,
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
    if (currentFill >= 80) return "#cf1322"; // Red - almost full
    if (currentFill >= 50) return "#faad14"; // Orange - half full
    if (currentFill >= 25) return "#52c41a"; // Green - good level
    return "#1890ff"; // Blue - low level
  };

  const binTop = 40;
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
        {/* Bin Container (Trapezoid shape) */}
        <defs>
          <linearGradient id="binGradient" x1="0%" y1="0%" x2="0%" y2="100%">
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
            id={`fillGradient-${currentFill}`}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: getFillColor(), stopOpacity: 0.8 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: getFillColor(), stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        {/* Bin outline (trapezoid) */}
        <path
          d={`M ${width * 0.2} 40 
              L ${width * 0.8} 40 
              L ${width * 0.9} ${height - 30} 
              L ${width * 0.1} ${height - 30} Z`}
          fill="url(#binGradient)"
          stroke="#262626"
          strokeWidth="3"
        />

        {/* Fill level (trapezoid matching the bin shape) */}
        {filledHeight > 0 && (
          <path
            d={`M ${
              width * 0.2 + width * 0.6 * (1 - currentFill / 100) * 0.15
            } ${binBottom - filledHeight}
                L ${
                  width * 0.8 - width * 0.6 * (1 - currentFill / 100) * 0.15
                } ${binBottom - filledHeight}
                L ${width * 0.9} ${binBottom}
                L ${width * 0.1} ${binBottom} Z`}
            fill={`url(#fillGradient-${currentFill})`}
            stroke="none"
          />
        )}

        {/* Level markers */}
        {[25, 50, 75].map((level) => {
          const y = binBottom - (level / 100) * binHeight;
          return (
            <g key={level}>
              <line
                x1={width * 0.05}
                y1={y}
                x2={width * 0.15}
                y2={y}
                stroke="#8c8c8c"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <text x={width * 0.02} y={y + 4} fontSize="10" fill="#8c8c8c">
                {level}%
              </text>
            </g>
          );
        })}

        {/* Bin label */}
        <text
          x={width / 2}
          y={20}
          textAnchor="middle"
          fontSize="14"
          fontWeight="bold"
          fill="#262626"
        >
          {material} Bin
        </text>

        {/* Fill percentage display */}
        <text
          x={width / 2}
          y={height - 5}
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill={getFillColor()}
        >
          {currentFill}%
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
            marks={{ 0: "0%", 25: "25%", 50: "50%", 75: "75%", 100: "100%" }}
          />
          <div style={{ marginTop: "8px", fontSize: "12px", color: "#8c8c8c" }}>
            Current: {currentAmount} / {capacity} tons
          </div>
        </div>
      )}
    </div>
  );
};

// Example instances
export const miningBinExamples: ComponentExample[] = [
  {
    title: "Basic Mining Bin",
    description: "Simple visualization of bin fill level",
    code: `<MiningBin 
  fillLevel={65} 
  capacity={100} 
  material="Iron Ore" 
/>`,
    component: <MiningBin fillLevel={65} capacity={100} material="Iron Ore" />,
  },
  {
    title: "Interactive Mining Bin",
    description: "Adjust fill level with slider control",
    code: `<MiningBin 
  fillLevel={45}
  capacity={250}
  material="Coal"
  interactive={true}
/>`,
    component: (
      <MiningBin
        fillLevel={45}
        capacity={250}
        material="Coal"
        interactive={true}
      />
    ),
  },
  {
    title: "Multiple Bins Dashboard",
    description: "Monitor multiple bins in a dashboard layout",
    code: `<Row gutter={[16, 16]}>
  <Col xs={24} sm={12} lg={8}>
    <Card>
      <MiningBin 
        fillLevel={85} 
        capacity={150} 
        material="Iron Ore"
        width={180}
        height={220}
      />
    </Card>
  </Col>
  <Col xs={24} sm={12} lg={8}>
    <Card>
      <MiningBin 
        fillLevel={45} 
        capacity={200} 
        material="Copper"
        width={180}
        height={220}
      />
    </Card>
  </Col>
  <Col xs={24} sm={12} lg={8}>
    <Card>
      <MiningBin 
        fillLevel={20} 
        capacity={175} 
        material="Gold Ore"
        width={180}
        height={220}
      />
    </Card>
  </Col>
</Row>`,
    component: (
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <MiningBin
              fillLevel={85}
              capacity={150}
              material="Iron Ore"
              width={180}
              height={220}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <MiningBin
              fillLevel={45}
              capacity={200}
              material="Copper"
              width={180}
              height={220}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card>
            <MiningBin
              fillLevel={20}
              capacity={175}
              material="Gold Ore"
              width={180}
              height={220}
            />
          </Card>
        </Col>
      </Row>
    ),
  },
  {
    title: "Bin with Statistics",
    description: "Combine bin visualization with statistical data",
    code: `<Card title="Storage Bin Monitor">
  <Row gutter={[16, 16]}>
    <Col xs={24} md={12}>
      <MiningBin 
        fillLevel={72} 
        capacity={300} 
        material="Limestone"
        width={200}
        height={240}
      />
    </Col>
    <Col xs={24} md={12}>
      <div style={{ marginTop: '40px' }}>
        <Statistic
          title="Current Load"
          value={216}
          suffix="tons"
          style={{ marginBottom: 16 }}
        />
        <Statistic
          title="Capacity"
          value={300}
          suffix="tons"
          style={{ marginBottom: 16 }}
        />
        <Statistic
          title="Available Space"
          value={84}
          suffix="tons"
          styles={{ content: { color: '#52c41a' } }}
        />
      </div>
    </Col>
  </Row>
</Card>`,
    component: (
      <Card title="Storage Bin Monitor">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <MiningBin
              fillLevel={72}
              capacity={300}
              material="Limestone"
              width={200}
              height={240}
            />
          </Col>
          <Col xs={24} md={12}>
            <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
              <Statistic
                title="Current Load"
                value={216}
                suffix="tons"
                style={{ marginBottom: 16 }}
              />
              <Statistic
                title="Capacity"
                value={300}
                suffix="tons"
                style={{ marginBottom: 16 }}
              />
              <Statistic
                title="Available Space"
                value={84}
                suffix="tons"
                styles={{ content: { color: "#52c41a" } }}
              />
            </div>
          </Col>
        </Row>
      </Card>
    ),
  },
];

export default MiningBin;
