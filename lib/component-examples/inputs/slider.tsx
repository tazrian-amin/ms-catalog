"use client";

import React from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ComponentExample } from "../../types";

function valuetext(value: number) {
  return `${value}°C`;
}

const marks = [
  { value: 0, label: "0°C" },
  { value: 20, label: "20°C" },
  { value: 37, label: "37°C" },
  { value: 100, label: "100°C" },
];

const productionMarks = [
  { value: 0, label: "0" },
  { value: 25, label: "25%" },
  { value: 50, label: "50%" },
  { value: 75, label: "75%" },
  { value: 100, label: "100%" },
];

export const sliderExamples: ComponentExample[] = [
  {
    title: "Basic Sliders",
    description: "Simple sliders in different sizes",
    code: `import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

<Box sx={{ width: 300 }}>
  <Typography gutterBottom>Default</Typography>
  <Slider defaultValue={30} aria-label="Default" />
  
  <Typography gutterBottom sx={{ mt: 3 }}>Small</Typography>
  <Slider defaultValue={50} size="small" aria-label="Small" />
  
  <Typography gutterBottom sx={{ mt: 3 }}>Disabled</Typography>
  <Slider defaultValue={30} disabled aria-label="Disabled" />
</Box>`,
    component: (
      <Box sx={{ width: 300 }}>
        <Typography gutterBottom>Default</Typography>
        <Slider defaultValue={30} aria-label="Default" />

        <Typography gutterBottom sx={{ mt: 3 }}>
          Small
        </Typography>
        <Slider defaultValue={50} size="small" aria-label="Small" />

        <Typography gutterBottom sx={{ mt: 3 }}>
          Disabled
        </Typography>
        <Slider defaultValue={30} disabled aria-label="Disabled" />
      </Box>
    ),
  },
  {
    title: "Temperature Range Slider",
    description: "Slider with custom marks and range",
    code: `import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const marks = [
  { value: 0, label: '0°C' },
  { value: 20, label: '20°C' },
  { value: 37, label: '37°C' },
  { value: 100, label: '100°C' },
];

function valuetext(value: number) {
  return \`\${value}°C\`;
}

<Box sx={{ width: 400 }}>
  <Typography gutterBottom>Temperature Control</Typography>
  <Slider
    defaultValue={37}
    getAriaValueText={valuetext}
    step={1}
    marks={marks}
    min={0}
    max={100}
    valueLabelDisplay="auto"
  />
</Box>`,
    component: (
      <Box sx={{ width: 400 }}>
        <Typography gutterBottom>Temperature Control</Typography>
        <Slider
          defaultValue={37}
          getAriaValueText={valuetext}
          step={1}
          marks={marks}
          min={0}
          max={100}
          valueLabelDisplay="auto"
        />
      </Box>
    ),
  },
  {
    title: "Range Slider",
    description: "Select a range of values",
    code: `import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function valuetext(value: number) {
  return \`\${value}°C\`;
}

<Box sx={{ width: 400 }}>
  <Typography gutterBottom>Operating Temperature Range</Typography>
  <Slider
    getAriaLabel={() => 'Temperature range'}
    value={[20, 80]}
    onChange={(event, newValue) => {
      // Handle range change
    }}
    valueLabelDisplay="auto"
    getAriaValueText={valuetext}
  />
</Box>`,
    component: (
      <Box sx={{ width: 400 }}>
        <Typography gutterBottom>Operating Temperature Range</Typography>
        <Slider
          getAriaLabel={() => "Temperature range"}
          defaultValue={[20, 80]}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
    ),
  },
  {
    title: "Production Target Slider",
    description: "Slider with percentage marks for production targets",
    code: `import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const marks = [
  { value: 0, label: '0' },
  { value: 25, label: '25%' },
  { value: 50, label: '50%' },
  { value: 75, label: '75%' },
  { value: 100, label: '100%' },
];

<Box sx={{ width: 400 }}>
  <Typography gutterBottom>Daily Production Target</Typography>
  <Slider
    defaultValue={75}
    step={5}
    marks={marks}
    min={0}
    max={100}
    valueLabelDisplay="on"
    sx={{
      color: '#ffc500',
      '& .MuiSlider-thumb': {
        '&:hover, &.Mui-focusVisible': {
          boxShadow: '0px 0px 0px 8px rgba(255, 197, 0, 0.16)',
        },
      },
    }}
  />
</Box>`,
    component: (
      <Box sx={{ width: 400 }}>
        <Typography gutterBottom>Daily Production Target</Typography>
        <Slider
          defaultValue={75}
          step={5}
          marks={productionMarks}
          min={0}
          max={100}
          valueLabelDisplay="on"
          sx={{
            color: "#ffc500",
            "& .MuiSlider-thumb": {
              "&:hover, &.Mui-focusVisible": {
                boxShadow: "0px 0px 0px 8px rgba(255, 197, 0, 0.16)",
              },
            },
          }}
        />
      </Box>
    ),
  },
  {
    title: "Discrete Slider",
    description: "Slider with discrete steps and value label",
    code: `import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

<Box sx={{ width: 300 }}>
  <Typography gutterBottom>Equipment Speed (RPM)</Typography>
  <Slider
    defaultValue={1500}
    step={100}
    min={0}
    max={3000}
    valueLabelDisplay="auto"
    marks
  />
  
  <Typography gutterBottom sx={{ mt: 4 }}>Load Capacity (tons)</Typography>
  <Slider
    defaultValue={50}
    step={10}
    min={0}
    max={100}
    valueLabelDisplay="auto"
    marks
    sx={{ color: '#52c41a' }}
  />
</Box>`,
    component: (
      <Box sx={{ width: 300 }}>
        <Typography gutterBottom>Equipment Speed (RPM)</Typography>
        <Slider
          defaultValue={1500}
          step={100}
          min={0}
          max={3000}
          valueLabelDisplay="auto"
          marks
        />

        <Typography gutterBottom sx={{ mt: 4 }}>
          Load Capacity (tons)
        </Typography>
        <Slider
          defaultValue={50}
          step={10}
          min={0}
          max={100}
          valueLabelDisplay="auto"
          marks
          sx={{ color: "#52c41a" }}
        />
      </Box>
    ),
  },
  {
    title: "Vertical Slider",
    description: "Vertical orientation for space-constrained layouts",
    code: `import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const marks = [
  { value: 0, label: 'Empty' },
  { value: 50, label: '50%' },
  { value: 100, label: 'Full' },
];

<Box sx={{ display: 'flex', gap: 4, height: 300 }}>
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Typography gutterBottom>Fuel Level</Typography>
    <Slider
      orientation="vertical"
      defaultValue={30}
      marks={marks}
      valueLabelDisplay="auto"
      sx={{ color: '#fa8c16' }}
    />
  </Box>
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Typography gutterBottom>Water Level</Typography>
    <Slider
      orientation="vertical"
      defaultValue={70}
      marks={marks}
      valueLabelDisplay="auto"
      sx={{ color: '#1890ff' }}
    />
  </Box>
</Box>`,
    component: (
      <Box sx={{ display: "flex", gap: 4, height: 300 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom>Fuel Level</Typography>
          <Slider
            orientation="vertical"
            defaultValue={30}
            marks={[
              { value: 0, label: "Empty" },
              { value: 50, label: "50%" },
              { value: 100, label: "Full" },
            ]}
            valueLabelDisplay="auto"
            sx={{ color: "#fa8c16" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography gutterBottom>Water Level</Typography>
          <Slider
            orientation="vertical"
            defaultValue={70}
            marks={[
              { value: 0, label: "Empty" },
              { value: 50, label: "50%" },
              { value: 100, label: "Full" },
            ]}
            valueLabelDisplay="auto"
            sx={{ color: "#1890ff" }}
          />
        </Box>
      </Box>
    ),
  },
];
