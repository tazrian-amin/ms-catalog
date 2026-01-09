"use client";

import React from "react";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WarningIcon from "@mui/icons-material/Warning";
import BuildIcon from "@mui/icons-material/Build";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { ComponentExample } from "../../types";

// Styled badge for custom styling
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export const badgeExamples: ComponentExample[] = [
  {
    title: "Basic Badge",
    description: "Simple badges with numerical content",
    code: `import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';

<Stack direction="row" spacing={2}>
  <Badge badgeContent={4} color="primary">
    <MailIcon />
  </Badge>
  <Badge badgeContent={10} color="secondary">
    <MailIcon />
  </Badge>
  <Badge badgeContent={23} color="error">
    <MailIcon />
  </Badge>
</Stack>`,
    component: (
      <Stack direction="row" spacing={2}>
        <Badge badgeContent={4} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={10} color="secondary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={23} color="error">
          <MailIcon />
        </Badge>
      </Stack>
    ),
  },
  {
    title: "Badge Colors",
    description: "Badges with different color variants",
    code: `import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Stack from '@mui/material/Stack';

<Stack direction="row" spacing={2}>
  <Badge badgeContent={4} color="primary">
    <NotificationsIcon />
  </Badge>
  <Badge badgeContent={4} color="secondary">
    <NotificationsIcon />
  </Badge>
  <Badge badgeContent={4} color="success">
    <NotificationsIcon />
  </Badge>
  <Badge badgeContent={4} color="error">
    <NotificationsIcon />
  </Badge>
  <Badge badgeContent={4} color="warning">
    <NotificationsIcon />
  </Badge>
  <Badge badgeContent={4} color="info">
    <NotificationsIcon />
  </Badge>
</Stack>`,
    component: (
      <Stack direction="row" spacing={2}>
        <Badge badgeContent={4} color="primary">
          <NotificationsIcon />
        </Badge>
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
        <Badge badgeContent={4} color="success">
          <NotificationsIcon />
        </Badge>
        <Badge badgeContent={4} color="error">
          <NotificationsIcon />
        </Badge>
        <Badge badgeContent={4} color="warning">
          <NotificationsIcon />
        </Badge>
        <Badge badgeContent={4} color="info">
          <NotificationsIcon />
        </Badge>
      </Stack>
    ),
  },
  {
    title: "Badge Maximum Value",
    description: "Badge with max value overflow",
    code: `import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';

<Stack direction="row" spacing={3}>
  <Badge badgeContent={99} color="primary">
    <MailIcon />
  </Badge>
  <Badge badgeContent={100} color="primary">
    <MailIcon />
  </Badge>
  <Badge badgeContent={1000} max={999} color="primary">
    <MailIcon />
  </Badge>
</Stack>`,
    component: (
      <Stack direction="row" spacing={3}>
        <Badge badgeContent={99} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={100} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={1000} max={999} color="primary">
          <MailIcon />
        </Badge>
      </Stack>
    ),
  },
  {
    title: "Dot Badge",
    description: "Small dot variant for indicators",
    code: `import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';

<Stack direction="row" spacing={3}>
  <Badge color="primary" variant="dot">
    <MailIcon />
  </Badge>
  <Badge color="error" variant="dot">
    <NotificationsIcon />
  </Badge>
  <Badge color="success" variant="dot">
    <MailIcon />
  </Badge>
</Stack>`,
    component: (
      <Stack direction="row" spacing={3}>
        <Badge color="primary" variant="dot">
          <MailIcon />
        </Badge>
        <Badge color="error" variant="dot">
          <NotificationsIcon />
        </Badge>
        <Badge color="success" variant="dot">
          <MailIcon />
        </Badge>
      </Stack>
    ),
  },
  {
    title: "Badge Visibility",
    description: "Show/hide badge with showZero prop",
    code: `import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';

<Stack direction="row" spacing={3}>
  <Badge badgeContent={0} color="primary">
    <MailIcon />
  </Badge>
  <Badge badgeContent={0} color="primary" showZero>
    <MailIcon />
  </Badge>
  <Badge badgeContent={0} color="primary" variant="dot">
    <MailIcon />
  </Badge>
</Stack>`,
    component: (
      <Stack direction="row" spacing={3}>
        <Badge badgeContent={0} color="primary">
          <MailIcon />
        </Badge>
        <Badge badgeContent={0} color="primary" showZero>
          <MailIcon />
        </Badge>
        <Badge badgeContent={0} color="primary" variant="dot">
          <MailIcon />
        </Badge>
      </Stack>
    ),
  },
  {
    title: "Badge Alignment",
    description: "Different badge positions",
    code: `import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';

<Stack direction="row" spacing={3}>
  <Badge 
    badgeContent={4} 
    color="primary"
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  >
    <MailIcon />
  </Badge>
  <Badge 
    badgeContent={4} 
    color="primary"
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  >
    <MailIcon />
  </Badge>
  <Badge 
    badgeContent={4} 
    color="primary"
    anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
  >
    <MailIcon />
  </Badge>
  <Badge 
    badgeContent={4} 
    color="primary"
    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
  >
    <MailIcon />
  </Badge>
</Stack>`,
    component: (
      <Stack direction="row" spacing={3}>
        <Badge
          badgeContent={4}
          color="primary"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MailIcon />
        </Badge>
        <Badge
          badgeContent={4}
          color="primary"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <MailIcon />
        </Badge>
        <Badge
          badgeContent={4}
          color="primary"
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <MailIcon />
        </Badge>
        <Badge
          badgeContent={4}
          color="primary"
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        >
          <MailIcon />
        </Badge>
      </Stack>
    ),
  },
  {
    title: "Badge with Avatar",
    description: "Badge on avatar for online status",
    code: `import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: \`0 0 0 2px \${theme.palette.background.paper}\`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': { transform: 'scale(.8)', opacity: 1 },
    '100%': { transform: 'scale(2.4)', opacity: 0 },
  },
}));

<Stack direction="row" spacing={2}>
  <StyledBadge
    overlap="circular"
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    variant="dot"
  >
    <Avatar>JD</Avatar>
  </StyledBadge>
  <Badge
    overlap="circular"
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    badgeContent=" "
    color="success"
  >
    <Avatar>MS</Avatar>
  </Badge>
</Stack>`,
    component: (
      <Stack direction="row" spacing={2}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar>JD</Avatar>
        </StyledBadge>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent=" "
          color="success"
        >
          <Avatar>MS</Avatar>
        </Badge>
      </Stack>
    ),
  },
  {
    title: "Mining Equipment Alerts",
    description: "Badges for equipment monitoring notifications",
    code: `import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import WarningIcon from '@mui/icons-material/Warning';
import BuildIcon from '@mui/icons-material/Build';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EngineeringIcon from '@mui/icons-material/Engineering';

<Stack direction="row" spacing={2}>
  <Badge badgeContent={3} color="error">
    <IconButton aria-label="equipment warnings">
      <WarningIcon />
    </IconButton>
  </Badge>
  <Badge badgeContent={5} color="warning">
    <IconButton aria-label="maintenance requests">
      <BuildIcon />
    </IconButton>
  </Badge>
  <Badge badgeContent={12} color="primary">
    <IconButton aria-label="active vehicles">
      <LocalShippingIcon />
    </IconButton>
  </Badge>
  <Badge badgeContent={8} color="success">
    <IconButton aria-label="engineers on site">
      <EngineeringIcon />
    </IconButton>
  </Badge>
</Stack>`,
    component: (
      <Stack direction="row" spacing={2}>
        <Badge badgeContent={3} color="error">
          <IconButton aria-label="equipment warnings">
            <WarningIcon />
          </IconButton>
        </Badge>
        <Badge badgeContent={5} color="warning">
          <IconButton aria-label="maintenance requests">
            <BuildIcon />
          </IconButton>
        </Badge>
        <Badge badgeContent={12} color="primary">
          <IconButton aria-label="active vehicles">
            <LocalShippingIcon />
          </IconButton>
        </Badge>
        <Badge badgeContent={8} color="success">
          <IconButton aria-label="engineers on site">
            <EngineeringIcon />
          </IconButton>
        </Badge>
      </Stack>
    ),
  },
  {
    title: "Customized Badge",
    description: "Badge with custom styling",
    code: `import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: \`2px solid \${theme.palette.background.paper}\`,
    padding: '0 4px',
  },
}));

<IconButton aria-label="cart">
  <StyledBadge badgeContent={4} color="secondary">
    <ShoppingCartIcon />
  </StyledBadge>
</IconButton>`,
    component: (
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    ),
  },
  {
    title: "Badge Overlap",
    description: "Badge positioned relative to shape",
    code: `import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

<Stack direction="row" spacing={3}>
  <Badge badgeContent={4} color="secondary">
    <Box sx={{ width: 40, height: 40, bgcolor: 'primary.main' }} />
  </Badge>
  <Badge badgeContent={4} color="secondary" variant="dot">
    <Box sx={{ width: 40, height: 40, bgcolor: 'primary.main' }} />
  </Badge>
  <Badge badgeContent={4} color="secondary" overlap="circular">
    <Avatar sx={{ bgcolor: 'primary.main' }}>MS</Avatar>
  </Badge>
  <Badge badgeContent={4} color="secondary" overlap="circular" variant="dot">
    <Avatar sx={{ bgcolor: 'primary.main' }}>MS</Avatar>
  </Badge>
</Stack>`,
    component: (
      <Stack direction="row" spacing={3}>
        <Badge badgeContent={4} color="secondary">
          <Box sx={{ width: 40, height: 40, bgcolor: "primary.main" }} />
        </Badge>
        <Badge badgeContent={4} color="secondary" variant="dot">
          <Box sx={{ width: 40, height: 40, bgcolor: "primary.main" }} />
        </Badge>
        <Badge badgeContent={4} color="secondary" overlap="circular">
          <Avatar sx={{ bgcolor: "primary.main" }}>MS</Avatar>
        </Badge>
        <Badge
          badgeContent={4}
          color="secondary"
          overlap="circular"
          variant="dot"
        >
          <Avatar sx={{ bgcolor: "primary.main" }}>MS</Avatar>
        </Badge>
      </Stack>
    ),
  },
];
