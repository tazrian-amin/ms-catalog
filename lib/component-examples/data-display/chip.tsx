"use client";

import React from "react";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";
import DoneIcon from "@mui/icons-material/Done";
import BuildIcon from "@mui/icons-material/Build";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import WarningIcon from "@mui/icons-material/Warning";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ComponentExample } from "../../types";

export const chipExamples: ComponentExample[] = [
  {
    title: "Basic Chip",
    description: "Simple chips with filled and outlined variants",
    code: `import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

<Stack direction="row" spacing={1}>
  <Chip label="Chip Filled" />
  <Chip label="Chip Outlined" variant="outlined" />
</Stack>`,
    component: (
      <Stack direction="row" spacing={1}>
        <Chip label="Chip Filled" />
        <Chip label="Chip Outlined" variant="outlined" />
      </Stack>
    ),
  },
  {
    title: "Chip Colors",
    description: "Chips with different color variants",
    code: `import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

<Stack direction="row" spacing={1}>
  <Chip label="Default" />
  <Chip label="Primary" color="primary" />
  <Chip label="Secondary" color="secondary" />
  <Chip label="Success" color="success" />
  <Chip label="Error" color="error" />
  <Chip label="Warning" color="warning" />
  <Chip label="Info" color="info" />
</Stack>`,
    component: (
      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Chip label="Default" />
        <Chip label="Primary" color="primary" />
        <Chip label="Secondary" color="secondary" />
        <Chip label="Success" color="success" />
        <Chip label="Error" color="error" />
        <Chip label="Warning" color="warning" />
        <Chip label="Info" color="info" />
      </Stack>
    ),
  },
  {
    title: "Clickable Chips",
    description: "Chips with click handlers",
    code: `import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const handleClick = () => {
  console.info('You clicked the Chip.');
};

<Stack direction="row" spacing={1}>
  <Chip label="Clickable" onClick={handleClick} />
  <Chip label="Clickable" variant="outlined" onClick={handleClick} />
  <Chip label="Clickable Link" component="a" href="#chip" clickable />
</Stack>`,
    component: (
      <Stack direction="row" spacing={1}>
        <Chip
          label="Clickable"
          onClick={() => console.info("You clicked the Chip.")}
        />
        <Chip
          label="Clickable"
          variant="outlined"
          onClick={() => console.info("You clicked the Chip.")}
        />
        <Chip label="Clickable Link" component="a" href="#chip" clickable />
      </Stack>
    ),
  },
  {
    title: "Deletable Chips",
    description: "Chips with delete functionality",
    code: `import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const handleDelete = () => {
  console.info('You clicked the delete icon.');
};

<Stack direction="row" spacing={1}>
  <Chip label="Deletable" onDelete={handleDelete} />
  <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
  <Chip
    label="Custom delete icon"
    onDelete={handleDelete}
    deleteIcon={<DoneIcon />}
  />
</Stack>`,
    component: (
      <Stack direction="row" spacing={1}>
        <Chip
          label="Deletable"
          onDelete={() => console.info("You clicked the delete icon.")}
        />
        <Chip
          label="Deletable"
          variant="outlined"
          onDelete={() => console.info("You clicked the delete icon.")}
        />
        <Chip
          label="Custom delete icon"
          onDelete={() => console.info("You clicked the delete icon.")}
          deleteIcon={<DoneIcon />}
        />
      </Stack>
    ),
  },
  {
    title: "Chip with Avatar",
    description: "Chips displaying avatars",
    code: `import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

<Stack direction="row" spacing={1}>
  <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
  <Chip
    avatar={<Avatar alt="John" src="https://api.dicebear.com/7.x/miniavs/svg?seed=john" />}
    label="John Doe"
    variant="outlined"
  />
</Stack>`,
    component: (
      <Stack direction="row" spacing={1}>
        <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
        <Chip
          avatar={
            <Avatar
              alt="John"
              src="https://api.dicebear.com/7.x/miniavs/svg?seed=john"
            />
          }
          label="John Doe"
          variant="outlined"
        />
      </Stack>
    ),
  },
  {
    title: "Chip with Icon",
    description: "Chips with leading icons",
    code: `import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';

<Stack direction="row" spacing={1}>
  <Chip icon={<FaceIcon />} label="With Icon" />
  <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
</Stack>`,
    component: (
      <Stack direction="row" spacing={1}>
        <Chip icon={<FaceIcon />} label="With Icon" />
        <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
      </Stack>
    ),
  },
  {
    title: "Chip Sizes",
    description: "Small and medium sized chips",
    code: `import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

<Stack direction="row" spacing={1} alignItems="center">
  <Chip label="Small" size="small" />
  <Chip label="Medium" />
  <Chip label="Small" size="small" variant="outlined" />
  <Chip label="Medium" variant="outlined" />
</Stack>`,
    component: (
      <Stack direction="row" spacing={1} alignItems="center">
        <Chip label="Small" size="small" />
        <Chip label="Medium" />
        <Chip label="Small" size="small" variant="outlined" />
        <Chip label="Medium" variant="outlined" />
      </Stack>
    ),
  },
  {
    title: "Mining Equipment Tags",
    description: "Chips for categorizing mining equipment",
    code: `import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import BuildIcon from '@mui/icons-material/Build';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

<Stack direction="row" spacing={1} flexWrap="wrap">
  <Chip
    icon={<CheckCircleIcon />}
    label="Active"
    color="success"
  />
  <Chip
    icon={<BuildIcon />}
    label="Maintenance"
    color="warning"
    onDelete={() => console.log('Remove maintenance tag')}
  />
  <Chip
    icon={<WarningIcon />}
    label="Critical"
    color="error"
  />
  <Chip
    icon={<LocalShippingIcon />}
    label="In Transit"
    color="info"
    variant="outlined"
  />
</Stack>`,
    component: (
      <Stack direction="row" spacing={1} flexWrap="wrap">
        <Chip icon={<CheckCircleIcon />} label="Active" color="success" />
        <Chip
          icon={<BuildIcon />}
          label="Maintenance"
          color="warning"
          onDelete={() => console.log("Remove maintenance tag")}
        />
        <Chip icon={<WarningIcon />} label="Critical" color="error" />
        <Chip
          icon={<LocalShippingIcon />}
          label="In Transit"
          color="info"
          variant="outlined"
        />
      </Stack>
    ),
  },
  {
    title: "Equipment Status Chips",
    description: "Interactive chips for filtering equipment status",
    code: `import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const [selected, setSelected] = React.useState('all');

<Stack direction="row" spacing={1} flexWrap="wrap">
  <Chip
    label="All Equipment"
    color={selected === 'all' ? 'primary' : 'default'}
    onClick={() => setSelected('all')}
  />
  <Chip
    label="Excavators"
    color={selected === 'excavators' ? 'primary' : 'default'}
    onClick={() => setSelected('excavators')}
  />
  <Chip
    label="Haul Trucks"
    color={selected === 'trucks' ? 'primary' : 'default'}
    onClick={() => setSelected('trucks')}
  />
  <Chip
    label="Drill Rigs"
    color={selected === 'drills' ? 'primary' : 'default'}
    onClick={() => setSelected('drills')}
  />
</Stack>`,
    component: (() => {
      const EquipmentFilterExample = () => {
        const [selected, setSelected] = React.useState("all");

        return (
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip
              label="All Equipment"
              color={selected === "all" ? "primary" : "default"}
              onClick={() => setSelected("all")}
            />
            <Chip
              label="Excavators"
              color={selected === "excavators" ? "primary" : "default"}
              onClick={() => setSelected("excavators")}
            />
            <Chip
              label="Haul Trucks"
              color={selected === "trucks" ? "primary" : "default"}
              onClick={() => setSelected("trucks")}
            />
            <Chip
              label="Drill Rigs"
              color={selected === "drills" ? "primary" : "default"}
              onClick={() => setSelected("drills")}
            />
          </Stack>
        );
      };

      return <EquipmentFilterExample />;
    })(),
  },
  {
    title: "Site Location Chips",
    description: "Deletable chips for managing site locations",
    code: `import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const [sites, setSites] = React.useState([
  { id: 1, name: 'Site A - North Pit' },
  { id: 2, name: 'Site B - South Pit' },
  { id: 3, name: 'Site C - Processing' },
]);

const handleDelete = (chipId: number) => {
  setSites((chips) => chips.filter((chip) => chip.id !== chipId));
};

<Stack direction="row" spacing={1} flexWrap="wrap">
  {sites.map((site) => (
    <Chip
      key={site.id}
      label={site.name}
      onDelete={() => handleDelete(site.id)}
      color="primary"
      variant="outlined"
    />
  ))}
</Stack>`,
    component: (() => {
      const SiteLocationExample = () => {
        const [sites, setSites] = React.useState([
          { id: 1, name: "Site A - North Pit" },
          { id: 2, name: "Site B - South Pit" },
          { id: 3, name: "Site C - Processing" },
        ]);

        const handleDelete = (chipId: number) => {
          setSites((chips) => chips.filter((chip) => chip.id !== chipId));
        };

        return (
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {sites.map((site) => (
              <Chip
                key={site.id}
                label={site.name}
                onDelete={() => handleDelete(site.id)}
                color="primary"
                variant="outlined"
              />
            ))}
          </Stack>
        );
      };

      return <SiteLocationExample />;
    })(),
  },
];
