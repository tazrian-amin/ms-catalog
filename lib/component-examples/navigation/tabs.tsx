"use client";

import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ComponentExample } from "../../types";

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Overview" />
        <Tab label="Analytics" />
        <Tab label="Settings" />
      </Tabs>
      <Box sx={{ p: 3 }}>
        {value === 0 && <div>Overview content goes here</div>}
        {value === 1 && <div>Analytics content goes here</div>}
        {value === 2 && <div>Settings content goes here</div>}
      </Box>
    </Box>
  );
}

export const tabsExamples: ComponentExample[] = [
  {
    title: "Basic Tabs",
    description: "Simple tabs for organizing content",
    code: `import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Overview" />
        <Tab label="Analytics" />
        <Tab label="Settings" />
      </Tabs>
      <Box sx={{ p: 3 }}>
        {value === 0 && <div>Overview content</div>}
        {value === 1 && <div>Analytics content</div>}
        {value === 2 && <div>Settings content</div>}
      </Box>
    </Box>
  );
}`,
    component: <BasicTabs />,
  },
];
