"use client";

import React from "react";
import TextField from "@mui/material/TextField";
import { ComponentExample } from "../../types";

export const textFieldExamples: ComponentExample[] = [
  {
    title: "Basic Text Fields",
    description: "Different variants of text input fields",
    code: `import TextField from '@mui/material/TextField';

<div className="flex flex-col gap-4">
  <TextField label="Outlined" variant="outlined" />
  <TextField label="Filled" variant="filled" />
  <TextField label="Standard" variant="standard" />
</div>`,
    component: (
      <div className="flex flex-col gap-4 max-w-md">
        <TextField label="Outlined" variant="outlined" />
        <TextField label="Filled" variant="filled" />
        <TextField label="Standard" variant="standard" />
      </div>
    ),
  },
  {
    title: "Text Field States",
    description: "Text fields with different states",
    code: `import TextField from '@mui/material/TextField';

<div className="flex flex-col gap-4">
  <TextField label="Required" required />
  <TextField label="Disabled" disabled value="Disabled" />
  <TextField label="Error" error helperText="This field is required" />
  <TextField 
    label="With Helper Text" 
    helperText="Please enter your email"
  />
</div>`,
    component: (
      <div className="flex flex-col gap-4 max-w-md">
        <TextField label="Required" required />
        <TextField label="Disabled" disabled value="Disabled" />
        <TextField label="Error" error helperText="This field is required" />
        <TextField
          label="With Helper Text"
          helperText="Please enter your email"
        />
      </div>
    ),
  },
  {
    title: "Multiline Text Field",
    description: "Text area for longer text input",
    code: `import TextField from '@mui/material/TextField';

<TextField
  label="Description"
  multiline
  rows={4}
  placeholder="Enter a detailed description..."
  fullWidth
/>`,
    component: (
      <div className="max-w-md">
        <TextField
          label="Description"
          multiline
          rows={4}
          placeholder="Enter a detailed description..."
          fullWidth
        />
      </div>
    ),
  },
];
