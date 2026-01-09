"use client";

import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { ComponentExample } from "../../types";

export const buttonExamples: ComponentExample[] = [
  {
    title: "Basic Buttons",
    description: "Different button variants for various use cases",
    code: `import Button from '@mui/material/Button';

<div className="flex gap-3 flex-wrap">
  <Button variant="contained">Contained</Button>
  <Button variant="outlined">Outlined</Button>
  <Button variant="text">Text</Button>
</div>`,
    component: (
      <div className="flex gap-3 flex-wrap">
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="text">Text</Button>
      </div>
    ),
  },
  {
    title: "Button Colors",
    description: "Buttons with different color schemes",
    code: `import Button from '@mui/material/Button';

<div className="flex gap-3 flex-wrap">
  <Button variant="contained" color="primary">Primary</Button>
  <Button variant="contained" color="secondary">Secondary</Button>
  <Button variant="contained" color="success">Success</Button>
  <Button variant="contained" color="error">Error</Button>
  <Button variant="contained" color="warning">Warning</Button>
  <Button variant="contained" color="info">Info</Button>
</div>`,
    component: (
      <div className="flex gap-3 flex-wrap">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
      </div>
    ),
  },
  {
    title: "Buttons with Icons",
    description: "Buttons enhanced with icons for better visual communication",
    code: `import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

<div className="flex gap-3 flex-wrap">
  <Button variant="contained" startIcon={<DeleteIcon />}>
    Delete
  </Button>
  <Button variant="contained" endIcon={<SendIcon />}>
    Send
  </Button>
</div>`,
    component: (
      <div className="flex gap-3 flex-wrap">
        <Button variant="contained" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
    ),
  },
  {
    title: "Button Sizes",
    description: "Buttons in different sizes",
    code: `import Button from '@mui/material/Button';

<div className="flex gap-3 items-center flex-wrap">
  <Button variant="contained" size="small">Small</Button>
  <Button variant="contained" size="medium">Medium</Button>
  <Button variant="contained" size="large">Large</Button>
</div>`,
    component: (
      <div className="flex gap-3 items-center flex-wrap">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </div>
    ),
  },
];
