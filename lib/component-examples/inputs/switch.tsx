"use client";

import React from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import { ComponentExample } from "../../types";

export const switchExamples: ComponentExample[] = [
  {
    title: "Basic Switches",
    description: "Simple switch controls for toggling states",
    code: `import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

<div className="flex flex-col gap-2">
  <FormControlLabel control={<Switch defaultChecked />} label="Checked" />
  <FormControlLabel control={<Switch />} label="Unchecked" />
  <FormControlLabel control={<Switch disabled />} label="Disabled" />
  <FormControlLabel 
    control={<Switch defaultChecked disabled />} 
    label="Checked & Disabled" 
  />
</div>`,
    component: (
      <div className="flex flex-col gap-2">
        <FormControlLabel control={<Switch defaultChecked />} label="Checked" />
        <FormControlLabel control={<Switch />} label="Unchecked" />
        <FormControlLabel control={<Switch disabled />} label="Disabled" />
        <FormControlLabel
          control={<Switch defaultChecked disabled />}
          label="Checked & Disabled"
        />
      </div>
    ),
  },
  {
    title: "Switch Sizes",
    description: "Switches in different sizes",
    code: `import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

<div className="flex flex-col gap-2">
  <FormControlLabel 
    control={<Switch defaultChecked size="small" />} 
    label="Small" 
  />
  <FormControlLabel 
    control={<Switch defaultChecked />} 
    label="Medium (Default)" 
  />
</div>`,
    component: (
      <div className="flex flex-col gap-2">
        <FormControlLabel
          control={<Switch defaultChecked size="small" />}
          label="Small"
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Medium (Default)"
        />
      </div>
    ),
  },
  {
    title: "Switch Colors",
    description: "Switches with different color schemes",
    code: `import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';

<Stack spacing={1}>
  <FormControlLabel 
    control={<Switch defaultChecked color="primary" />} 
    label="Primary" 
  />
  <FormControlLabel 
    control={<Switch defaultChecked color="secondary" />} 
    label="Secondary" 
  />
  <FormControlLabel 
    control={<Switch defaultChecked color="success" />} 
    label="Success" 
  />
  <FormControlLabel 
    control={<Switch defaultChecked color="warning" />} 
    label="Warning" 
  />
  <FormControlLabel 
    control={<Switch defaultChecked color="error" />} 
    label="Error" 
  />
</Stack>`,
    component: (
      <Stack spacing={1}>
        <FormControlLabel
          control={<Switch defaultChecked color="primary" />}
          label="Primary"
        />
        <FormControlLabel
          control={<Switch defaultChecked color="secondary" />}
          label="Secondary"
        />
        <FormControlLabel
          control={<Switch defaultChecked color="success" />}
          label="Success"
        />
        <FormControlLabel
          control={<Switch defaultChecked color="warning" />}
          label="Warning"
        />
        <FormControlLabel
          control={<Switch defaultChecked color="error" />}
          label="Error"
        />
      </Stack>
    ),
  },
  {
    title: "Label Placement",
    description: "Switches with labels in different positions",
    code: `import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

<div className="flex flex-col gap-2">
  <FormControlLabel 
    control={<Switch defaultChecked />} 
    label="Label End (Default)" 
    labelPlacement="end"
  />
  <FormControlLabel 
    control={<Switch defaultChecked />} 
    label="Label Start" 
    labelPlacement="start"
  />
  <FormControlLabel 
    control={<Switch defaultChecked />} 
    label="Label Top" 
    labelPlacement="top"
  />
  <FormControlLabel 
    control={<Switch defaultChecked />} 
    label="Label Bottom" 
    labelPlacement="bottom"
  />
</div>`,
    component: (
      <div className="flex flex-col gap-2">
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Label End (Default)"
          labelPlacement="end"
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Label Start"
          labelPlacement="start"
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Label Top"
          labelPlacement="top"
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Label Bottom"
          labelPlacement="bottom"
        />
      </div>
    ),
  },
  {
    title: "Switch Group",
    description: "Group of related switches for multiple settings",
    code: `import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

<FormGroup>
  <FormControlLabel 
    control={<Switch defaultChecked />} 
    label="Real-time Monitoring" 
  />
  <FormControlLabel 
    control={<Switch defaultChecked />} 
    label="Alert Notifications" 
  />
  <FormControlLabel 
    control={<Switch />} 
    label="Auto Reports" 
  />
  <FormControlLabel 
    control={<Switch />} 
    label="Maintenance Mode" 
  />
</FormGroup>`,
    component: (
      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Real-time Monitoring"
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Alert Notifications"
        />
        <FormControlLabel control={<Switch />} label="Auto Reports" />
        <FormControlLabel control={<Switch />} label="Maintenance Mode" />
      </FormGroup>
    ),
  },
  {
    title: "Equipment Control Switches",
    description: "Mining equipment control panel with switches",
    code: `import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

<div className="bg-gray-50 p-4 rounded border border-gray-200">
  <h3 className="text-sm font-semibold mb-3 text-gray-700">
    Equipment Controls
  </h3>
  <FormGroup>
    <FormControlLabel 
      control={<Switch defaultChecked color="success" />} 
      label="Excavator #1" 
    />
    <FormControlLabel 
      control={<Switch defaultChecked color="success" />} 
      label="Haul Truck #3" 
    />
    <FormControlLabel 
      control={<Switch color="warning" />} 
      label="Drill Rig #2" 
    />
    <FormControlLabel 
      control={<Switch disabled />} 
      label="Loader #5 (Maintenance)" 
    />
  </FormGroup>
</div>`,
    component: (
      <div className="bg-gray-50 p-4 rounded border border-gray-200">
        <h3 className="text-sm font-semibold mb-3 text-gray-700">
          Equipment Controls
        </h3>
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked color="success" />}
            label="Excavator #1"
          />
          <FormControlLabel
            control={<Switch defaultChecked color="success" />}
            label="Haul Truck #3"
          />
          <FormControlLabel
            control={<Switch color="warning" />}
            label="Drill Rig #2"
          />
          <FormControlLabel
            control={<Switch disabled />}
            label="Loader #5 (Maintenance)"
          />
        </FormGroup>
      </div>
    ),
  },
];
