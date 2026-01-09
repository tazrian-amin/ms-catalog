"use client";

import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { ComponentExample } from "../../types";

// Circular Gauge Component
function CircularGauge({
  value,
  max = 100,
  label,
  size = 120,
  color = "primary" as
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning",
}: {
  value: number;
  max?: number;
  label?: string;
  size?: number;
  color?: "primary" | "secondary" | "success" | "error" | "info" | "warning";
}) {
  const percentage = (value / max) * 100;

  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={100}
        size={size}
        thickness={4}
        sx={{
          color: "rgba(0, 0, 0, 0.1)",
          position: "absolute",
        }}
      />
      <CircularProgress
        variant="determinate"
        value={percentage}
        size={size}
        thickness={4}
        color={color}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" component="div" color="text.primary">
          {value}
        </Typography>
        {label && (
          <Typography variant="caption" component="div" color="text.secondary">
            {label}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export const circularGaugeExamples: ComponentExample[] = [
  {
    title: "Basic Circular Gauge",
    description: "Simple circular gauge displaying percentage values",
    code: `import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

function CircularGauge({ value, max = 100, label, size = 120 }) {
  const percentage = (value / max) * 100;

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        value={100}
        size={size}
        thickness={4}
        sx={{ color: 'rgba(0, 0, 0, 0.1)', position: 'absolute' }}
      />
      <CircularProgress
        variant="determinate"
        value={percentage}
        size={size}
        thickness={4}
      />
      <Box
        sx={{
          top: 0, left: 0, bottom: 0, right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h6">{value}</Typography>
        {label && <Typography variant="caption">{label}</Typography>}
      </Box>
    </Box>
  );
}

<CircularGauge value={75} max={100} label="%" />`,
    component: (
      <div className="flex justify-center">
        <CircularGauge value={75} max={100} label="%" />
      </div>
    ),
  },
  {
    title: "Equipment Status Gauges",
    description: "Monitor equipment performance metrics",
    code: `<div className="flex gap-6 flex-wrap justify-center">
  <div className="text-center">
    <CircularGauge value={92} max={100} label="%" color="success" />
    <Typography sx={{ mt: 1 }}>Excavator Uptime</Typography>
  </div>
  <div className="text-center">
    <CircularGauge value={78} max={100} label="%" color="warning" />
    <Typography sx={{ mt: 1 }}>Drill Efficiency</Typography>
  </div>
  <div className="text-center">
    <CircularGauge value={45} max={100} label="%" color="error" />
    <Typography sx={{ mt: 1 }}>Loader Performance</Typography>
  </div>
</div>`,
    component: (
      <div className="flex gap-6 flex-wrap justify-center">
        <div className="text-center">
          <CircularGauge value={92} max={100} label="%" color="success" />
          <Typography sx={{ mt: 1 }}>Excavator Uptime</Typography>
        </div>
        <div className="text-center">
          <CircularGauge value={78} max={100} label="%" color="warning" />
          <Typography sx={{ mt: 1 }}>Drill Efficiency</Typography>
        </div>
        <div className="text-center">
          <CircularGauge value={45} max={100} label="%" color="error" />
          <Typography sx={{ mt: 1 }}>Loader Performance</Typography>
        </div>
      </div>
    ),
  },
  {
    title: "Temperature Monitoring",
    description: "Display temperature readings with custom ranges",
    code: `<div className="flex gap-6 flex-wrap justify-center">
  <div className="text-center">
    <CircularGauge value={65} max={150} label="°C" color="success" size={140} />
    <Typography sx={{ mt: 1 }}>Engine Temp</Typography>
  </div>
  <div className="text-center">
    <CircularGauge value={120} max={150} label="°C" color="error" size={140} />
    <Typography sx={{ mt: 1 }}>Hydraulic Temp</Typography>
  </div>
</div>`,
    component: (
      <div className="flex gap-6 flex-wrap justify-center">
        <div className="text-center">
          <CircularGauge
            value={65}
            max={150}
            label="°C"
            color="success"
            size={140}
          />
          <Typography sx={{ mt: 1 }}>Engine Temp</Typography>
        </div>
        <div className="text-center">
          <CircularGauge
            value={120}
            max={150}
            label="°C"
            color="error"
            size={140}
          />
          <Typography sx={{ mt: 1 }}>Hydraulic Temp</Typography>
        </div>
      </div>
    ),
  },
];
