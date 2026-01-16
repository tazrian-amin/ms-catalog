"use client";

import React, { useState } from "react";
import { Slider, Card, Statistic, Row, Col } from "antd";
import { ComponentExample } from "../../types";

// Industrial Bin Hopper Component
interface IndustrialBinHopperProps {
  fillLevel: number; // 0-100
  capacity: number; // total capacity in tons
  material?: string;
  width?: number;
  height?: number;
  interactive?: boolean;
  onFillLevelChange?: (value: number) => void;
}

const IndustrialBinHopper: React.FC<IndustrialBinHopperProps> = ({
  fillLevel,
  capacity,
  material = "Ore",
  width = 300,
  height = 400,
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
    if (currentFill >= 80) return "#d32f2f";
    if (currentFill >= 50) return "#f57c00";
    if (currentFill >= 25) return "#388e3c";
    return "#1976d2";
  };

  const getMaterialColor = () => {
    if (material.toLowerCase().includes("coal")) return "#424242";
    if (material.toLowerCase().includes("iron")) return "#8d6e63";
    if (material.toLowerCase().includes("copper")) return "#d84315";
    if (material.toLowerCase().includes("gold")) return "#fdd835";
    return "#795548"; // default brownish for ore
  };

  const currentAmount = ((currentFill / 100) * capacity).toFixed(1);

  // Hopper dimensions
  const topWidth = width * 0.85;
  const midTopWidth = width * 0.78;
  const midBottomWidth = width * 0.5;
  const bottomWidth = width * 0.25;
  const dischargeWidth = width * 0.15;

  const topY = 60;
  const section1Y = 120;
  const section2Y = 200;
  const section3Y = 280;
  const bottomY = 340;
  const dischargeY = 370;

  const totalHeight = dischargeY - topY;

  // Calculate fill sections
  const fillHeight = (currentFill / 100) * totalHeight;

  // Add padding for level indicators
  const svgWidth = width + 80; // Add 80px padding (40px on each side)
  const hopperOffsetX = 40; // Center the hopper with left padding

  return (
    <div style={{ textAlign: "center" }}>
      <svg
        width={svgWidth}
        height={height}
        style={{
          display: "block",
          margin: "0 auto",
          background: "transparent",
        }}
      >
        <defs>
          {/* Metal texture for hopper */}
          <pattern
            id="metal-texture"
            width="4"
            height="4"
            patternUnits="userSpaceOnUse"
          >
            <rect width="4" height="4" fill="#bdbdbd" />
            <circle cx="2" cy="2" r="0.5" fill="#757575" />
          </pattern>

          {/* Material gradient */}
          <linearGradient
            id="material-gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              style={{ stopColor: getMaterialColor(), stopOpacity: 0.9 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: getMaterialColor(), stopOpacity: 1 }}
            />
          </linearGradient>

          {/* Hopper metal gradient */}
          <linearGradient id="hopper-metal" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#9e9e9e", stopOpacity: 0.9 }}
            />
            <stop
              offset="50%"
              style={{ stopColor: "#e0e0e0", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#757575", stopOpacity: 0.9 }}
            />
          </linearGradient>

          {/* Clip path for material fill */}
          <clipPath id="hopper-clip">
            <path
              d={`
              M ${hopperOffsetX + (width - topWidth) / 2} ${topY}
              L ${hopperOffsetX + (width + topWidth) / 2} ${topY}
              L ${hopperOffsetX + (width + midTopWidth) / 2} ${section1Y}
              L ${hopperOffsetX + (width + midTopWidth) / 2} ${section2Y}
              L ${hopperOffsetX + (width + midBottomWidth) / 2} ${section3Y}
              L ${hopperOffsetX + (width + bottomWidth) / 2} ${bottomY}
              L ${hopperOffsetX + (width + dischargeWidth) / 2} ${dischargeY}
              L ${hopperOffsetX + (width - dischargeWidth) / 2} ${dischargeY}
              L ${hopperOffsetX + (width - bottomWidth) / 2} ${bottomY}
              L ${hopperOffsetX + (width - midBottomWidth) / 2} ${section3Y}
              L ${hopperOffsetX + (width - midTopWidth) / 2} ${section2Y}
              L ${hopperOffsetX + (width - midTopWidth) / 2} ${section1Y}
              Z
            `}
            />
          </clipPath>
        </defs>

        {/* Title */}
        <text
          x={hopperOffsetX + width / 2}
          y={30}
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
          fill="#212121"
        >
          {material} Hopper
        </text>

        {/* Hopper structure - Top section */}
        <path
          d={`
            M ${hopperOffsetX + (width - topWidth) / 2} ${topY}
            L ${hopperOffsetX + (width + topWidth) / 2} ${topY}
            L ${hopperOffsetX + (width + midTopWidth) / 2} ${section1Y}
            L ${hopperOffsetX + (width - midTopWidth) / 2} ${section1Y}
            Z
          `}
          fill="url(#hopper-metal)"
          stroke="#424242"
          strokeWidth="2.5"
        />

        {/* Support beams - top */}
        {[0.3, 0.5, 0.7].map((pos) => (
          <rect
            key={`beam-top-${pos}`}
            x={hopperOffsetX + (width - topWidth) / 2 + topWidth * pos - 3}
            y={topY}
            width="6"
            height={section1Y - topY}
            fill="#616161"
            stroke="#424242"
            strokeWidth="1"
          />
        ))}

        {/* Middle section 1 */}
        <path
          d={`
            M ${hopperOffsetX + (width - midTopWidth) / 2} ${section1Y}
            L ${hopperOffsetX + (width + midTopWidth) / 2} ${section1Y}
            L ${hopperOffsetX + (width + midTopWidth) / 2} ${section2Y}
            L ${hopperOffsetX + (width - midTopWidth) / 2} ${section2Y}
            Z
          `}
          fill="url(#hopper-metal)"
          stroke="#424242"
          strokeWidth="2.5"
        />

        {/* Rivets on middle section */}
        {Array.from({ length: 8 }).map((_, i) => (
          <circle
            key={`rivet-1-${i}`}
            cx={hopperOffsetX + (width - midTopWidth) / 2 + 10}
            cy={section1Y + ((section2Y - section1Y) / 8) * i + 10}
            r="2"
            fill="#757575"
            stroke="#424242"
            strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <circle
            key={`rivet-2-${i}`}
            cx={hopperOffsetX + (width + midTopWidth) / 2 - 10}
            cy={section1Y + ((section2Y - section1Y) / 8) * i + 10}
            r="2"
            fill="#757575"
            stroke="#424242"
            strokeWidth="0.5"
          />
        ))}

        {/* Middle section 2 - tapered */}
        <path
          d={`
            M ${hopperOffsetX + (width - midTopWidth) / 2} ${section2Y}
            L ${hopperOffsetX + (width + midTopWidth) / 2} ${section2Y}
            L ${hopperOffsetX + (width + midBottomWidth) / 2} ${section3Y}
            L ${hopperOffsetX + (width - midBottomWidth) / 2} ${section3Y}
            Z
          `}
          fill="url(#hopper-metal)"
          stroke="#424242"
          strokeWidth="2.5"
        />

        {/* Bottom funnel section */}
        <path
          d={`
            M ${hopperOffsetX + (width - midBottomWidth) / 2} ${section3Y}
            L ${hopperOffsetX + (width + midBottomWidth) / 2} ${section3Y}
            L ${hopperOffsetX + (width + bottomWidth) / 2} ${bottomY}
            L ${hopperOffsetX + (width - bottomWidth) / 2} ${bottomY}
            Z
          `}
          fill="url(#hopper-metal)"
          stroke="#424242"
          strokeWidth="2.5"
        />

        {/* Discharge chute */}
        <path
          d={`
            M ${hopperOffsetX + (width - bottomWidth) / 2} ${bottomY}
            L ${hopperOffsetX + (width + bottomWidth) / 2} ${bottomY}
            L ${hopperOffsetX + (width + dischargeWidth) / 2} ${dischargeY}
            L ${hopperOffsetX + (width - dischargeWidth) / 2} ${dischargeY}
            Z
          `}
          fill="#757575"
          stroke="#424242"
          strokeWidth="2.5"
        />

        {/* Material fill */}
        {fillHeight > 0 && (
          <g>
            {(() => {
              // Calculate the fill shape based on the hopper's geometry
              const fillTopY = dischargeY - fillHeight;

              // Function to calculate width at a given Y position
              const getWidthAtY = (y: number) => {
                if (y >= dischargeY) return dischargeWidth;
                if (y >= bottomY) {
                  // Between bottomY and dischargeY: interpolate from bottomWidth to dischargeWidth
                  const progress = (y - bottomY) / (dischargeY - bottomY);
                  return (
                    bottomWidth + (dischargeWidth - bottomWidth) * progress
                  );
                }
                if (y >= section3Y) {
                  // Between section3Y and bottomY: interpolate from midBottomWidth to bottomWidth
                  const progress = (y - section3Y) / (bottomY - section3Y);
                  return (
                    midBottomWidth + (bottomWidth - midBottomWidth) * progress
                  );
                }
                if (y >= section2Y) {
                  // Between section2Y and section3Y: interpolate from midTopWidth to midBottomWidth
                  const progress = (y - section2Y) / (section3Y - section2Y);
                  return (
                    midTopWidth + (midBottomWidth - midTopWidth) * progress
                  );
                }
                if (y >= section1Y) {
                  // Between section1Y and section2Y: constant midTopWidth
                  return midTopWidth;
                }
                if (y >= topY) {
                  // Between topY and section1Y: interpolate from topWidth to midTopWidth
                  const progress = (y - topY) / (section1Y - topY);
                  return topWidth + (midTopWidth - topWidth) * progress;
                }
                return topWidth;
              };

              const fillTopWidth = getWidthAtY(fillTopY);

              // Build the fill path
              let fillPath = `M ${
                hopperOffsetX + (width - fillTopWidth) / 2
              } ${fillTopY} `;
              fillPath += `L ${
                hopperOffsetX + (width + fillTopWidth) / 2
              } ${fillTopY} `;

              // Add points along the right edge going down
              const segments = [
                { y: section1Y, w: midTopWidth },
                { y: section2Y, w: midTopWidth },
                { y: section3Y, w: midBottomWidth },
                { y: bottomY, w: bottomWidth },
                { y: dischargeY, w: dischargeWidth },
              ];

              for (const seg of segments) {
                if (seg.y > fillTopY) {
                  fillPath += `L ${hopperOffsetX + (width + seg.w) / 2} ${
                    seg.y
                  } `;
                }
              }

              // Add points along the left edge going up
              for (let i = segments.length - 1; i >= 0; i--) {
                const seg = segments[i];
                if (seg.y > fillTopY) {
                  fillPath += `L ${hopperOffsetX + (width - seg.w) / 2} ${
                    seg.y
                  } `;
                }
              }

              fillPath += `Z`;

              return <path d={fillPath} fill="url(#material-gradient)" />;
            })()}
          </g>
        )}

        {/* Level indicators */}
        {[25, 50, 75, 100].map((level) => {
          const y = dischargeY - (level / 100) * totalHeight;
          const textLeft = 5; // Fixed left position with padding
          const lineStartX = textLeft + 35; // Start line after text
          return (
            <g key={level}>
              <text
                x={textLeft}
                y={y + 4}
                fontSize="11"
                fontWeight="bold"
                fill="#424242"
                textAnchor="start"
              >
                {level}%
              </text>
              <line
                x1={lineStartX}
                y1={y}
                x2={lineStartX + 20}
                y2={y}
                stroke="#616161"
                strokeWidth="1.5"
                strokeDasharray="4,2"
              />
            </g>
          );
        })}

        {/* Fill percentage display */}
        <rect
          x={hopperOffsetX + width / 2 - 35}
          y={height - 25}
          width="70"
          height="22"
          fill={getFillColor()}
          rx="3"
          opacity="0.9"
        />
        <text
          x={hopperOffsetX + width / 2}
          y={height - 9}
          textAnchor="middle"
          fontSize="14"
          fontWeight="bold"
          fill="white"
        >
          {currentFill}% Full
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
            marks={{ 0: "Empty", 25: "25%", 50: "50%", 75: "75%", 100: "Full" }}
          />
          <Row gutter={[16, 16]} style={{ marginTop: "12px" }}>
            <Col xs={24} sm={8}>
              <Statistic
                title="Current Load"
                value={currentAmount}
                suffix="tons"
                styles={{ content: { fontSize: "16px" } }}
              />
            </Col>
            <Col xs={24} sm={8}>
              <Statistic
                title="Capacity"
                value={capacity}
                suffix="tons"
                styles={{ content: { fontSize: "16px" } }}
              />
            </Col>
            <Col xs={24} sm={8}>
              <Statistic
                title="Available"
                value={((capacity * (100 - currentFill)) / 100).toFixed(1)}
                suffix="tons"
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
export const IndustrialBinHopperExamples: ComponentExample[] = [
  {
    title: "Basic Industrial Bin Hopper",
    description:
      "Detailed bin hopper with industrial design and realistic structure",
    code: `<IndustrialBinHopper 
  fillLevel={65} 
  capacity={500} 
  material="Coal"
  width={300}
  height={400}
/>`,
    component: (
      <IndustrialBinHopper
        fillLevel={65}
        capacity={500}
        material="Coal"
        width={300}
        height={400}
      />
    ),
  },
  {
    title: "Interactive Industrial Hopper",
    description:
      "Full-featured hopper with interactive controls and live statistics",
    code: `<IndustrialBinHopper 
  fillLevel={75}
  capacity={800}
  material="Iron Ore"
  width={300}
  height={400}
  interactive={true}
/>`,
    component: (
      <IndustrialBinHopper
        fillLevel={75}
        capacity={800}
        material="Iron Ore"
        width={300}
        height={400}
        interactive={true}
      />
    ),
  },
  {
    title: "Multiple Hopper Monitoring System",
    description: "Monitor multiple industrial hoppers simultaneously",
    code: `<Row gutter={[24, 24]}>
  <Col xs={24} lg={8}>
    <Card 
      title="Hopper A - Coal Storage" 
      style={{ height: "100%" }}
      styles={{ 
        body: {
          padding: "24px",
          display: "flex", 
          justifyContent: "center", 
          alignItems: "flex-start",
          minHeight: "450px",
          overflow: "visible"
        }
      }}
    >
      <IndustrialBinHopper 
        fillLevel={85} 
        capacity={600} 
        material="Coal"
        width={240}
        height={380}
      />
    </Card>
  </Col>
  <Col xs={24} lg={8}>
    <Card 
      title="Hopper B - Copper Ore" 
      style={{ height: "100%" }}
      styles={{ 
        body: {
          padding: "24px",
          display: "flex", 
          justifyContent: "center", 
          alignItems: "flex-start",
          minHeight: "450px",
          overflow: "visible"
        }
      }}
    >
      <IndustrialBinHopper 
        fillLevel={45} 
        capacity={600} 
        material="Copper"
        width={240}
        height={380}
      />
    </Card>
  </Col>
  <Col xs={24} lg={8}>
    <Card 
      title="Hopper C - Gold Ore" 
      style={{ height: "100%" }}
      styles={{ 
        body: {
          padding: "24px",
          display: "flex", 
          justifyContent: "center", 
          alignItems: "flex-start",
          minHeight: "450px",
          overflow: "visible"
        }
      }}
    >
      <IndustrialBinHopper 
        fillLevel={20} 
        capacity={600} 
        material="Gold Ore"
        width={240}
        height={380}
      />
    </Card>
  </Col>
</Row>`,
    component: (
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={8}>
          <Card
            title="Hopper A - Coal Storage"
            style={{ height: "100%" }}
            styles={{
              body: {
                padding: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                minHeight: "450px",
                overflow: "visible",
              },
            }}
          >
            <IndustrialBinHopper
              fillLevel={85}
              capacity={600}
              material="Coal"
              width={240}
              height={380}
            />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card
            title="Hopper B - Copper Ore"
            style={{ height: "100%" }}
            styles={{
              body: {
                padding: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                minHeight: "450px",
                overflow: "visible",
              },
            }}
          >
            <IndustrialBinHopper
              fillLevel={45}
              capacity={600}
              material="Copper"
              width={240}
              height={380}
            />
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card
            title="Hopper C - Gold Ore"
            style={{ height: "100%" }}
            styles={{
              body: {
                padding: "24px",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                minHeight: "450px",
                overflow: "visible",
              },
            }}
          >
            <IndustrialBinHopper
              fillLevel={20}
              capacity={600}
              material="Gold Ore"
              width={240}
              height={380}
            />
          </Card>
        </Col>
      </Row>
    ),
  },
];

export default IndustrialBinHopper;
