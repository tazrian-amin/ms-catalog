"use client";

import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { ComponentExample } from "../../types";

export const alertExamples: ComponentExample[] = [
  {
    title: "Basic Alerts",
    description: "Different severity levels of alerts",
    code: `import Alert from '@mui/material/Alert';

<div className="flex flex-col gap-3">
  <Alert severity="success">This is a success alert</Alert>
  <Alert severity="info">This is an info alert</Alert>
  <Alert severity="warning">This is a warning alert</Alert>
  <Alert severity="error">This is an error alert</Alert>
</div>`,
    component: (
      <div className="flex flex-col gap-3">
        <Alert severity="success">This is a success alert</Alert>
        <Alert severity="info">This is an info alert</Alert>
        <Alert severity="warning">This is a warning alert</Alert>
        <Alert severity="error">This is an error alert</Alert>
      </div>
    ),
  },
  {
    title: "Alerts with Titles",
    description: "Alerts with descriptive titles",
    code: `import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

<div className="flex flex-col gap-3">
  <Alert severity="success">
    <AlertTitle>Success</AlertTitle>
    Your data has been saved successfully!
  </Alert>
  <Alert severity="warning">
    <AlertTitle>Warning</AlertTitle>
    System maintenance scheduled for tonight.
  </Alert>
  <Alert severity="error">
    <AlertTitle>Error</AlertTitle>
    Failed to connect to the server. Please try again.
  </Alert>
</div>`,
    component: (
      <div className="flex flex-col gap-3">
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Your data has been saved successfully!
        </Alert>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          System maintenance scheduled for tonight.
        </Alert>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Failed to connect to the server. Please try again.
        </Alert>
      </div>
    ),
  },
  {
    title: "Alert Variants",
    description: "Different visual styles of alerts",
    code: `import Alert from '@mui/material/Alert';

<div className="flex flex-col gap-3">
  <Alert severity="info" variant="filled">
    Filled info alert
  </Alert>
  <Alert severity="success" variant="outlined">
    Outlined success alert
  </Alert>
  <Alert severity="warning" variant="standard">
    Standard warning alert
  </Alert>
</div>`,
    component: (
      <div className="flex flex-col gap-3">
        <Alert severity="info" variant="filled">
          Filled info alert
        </Alert>
        <Alert severity="success" variant="outlined">
          Outlined success alert
        </Alert>
        <Alert severity="warning" variant="standard">
          Standard warning alert
        </Alert>
      </div>
    ),
  },
];
