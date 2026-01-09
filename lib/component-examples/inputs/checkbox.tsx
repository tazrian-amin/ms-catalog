"use client";

import React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { ComponentExample } from "../../types";

export const checkboxExamples: ComponentExample[] = [
  {
    title: "Basic Checkboxes",
    description: "Simple checkbox controls",
    code: `import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

<div className="flex flex-col gap-2">
  <FormControlLabel control={<Checkbox defaultChecked />} label="Checked" />
  <FormControlLabel control={<Checkbox />} label="Unchecked" />
  <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
  <FormControlLabel 
    control={<Checkbox defaultChecked disabled />} 
    label="Checked & Disabled" 
  />
</div>`,
    component: (
      <div className="flex flex-col gap-2">
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Checked"
        />
        <FormControlLabel control={<Checkbox />} label="Unchecked" />
        <FormControlLabel control={<Checkbox disabled />} label="Disabled" />
        <FormControlLabel
          control={<Checkbox defaultChecked disabled />}
          label="Checked & Disabled"
        />
      </div>
    ),
  },
  {
    title: "Checkbox Group",
    description: "Group of related checkboxes",
    code: `import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

<FormGroup>
  <FormControlLabel control={<Checkbox />} label="React" />
  <FormControlLabel control={<Checkbox />} label="TypeScript" />
  <FormControlLabel control={<Checkbox />} label="Next.js" />
  <FormControlLabel control={<Checkbox />} label="Tailwind CSS" />
</FormGroup>`,
    component: (
      <FormGroup>
        <FormControlLabel control={<Checkbox />} label="React" />
        <FormControlLabel control={<Checkbox />} label="TypeScript" />
        <FormControlLabel control={<Checkbox />} label="Next.js" />
        <FormControlLabel control={<Checkbox />} label="Tailwind CSS" />
      </FormGroup>
    ),
  },
];
