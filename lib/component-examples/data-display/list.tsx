"use client";

import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import StarIcon from "@mui/icons-material/Star";
import { ComponentExample } from "../../types";

export const listExamples: ComponentExample[] = [
  {
    title: "Basic List",
    description: "Simple list with text items",
    code: `import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  <ListItem>
    <ListItemText primary="Excavator #1 - Site A" />
  </ListItem>
  <ListItem>
    <ListItemText primary="Haul Truck #3 - Site B" />
  </ListItem>
  <ListItem>
    <ListItemText primary="Drill Rig #2 - Site A" />
  </ListItem>
  <ListItem>
    <ListItemText primary="Loader #4 - Site C" />
  </ListItem>
</List>`,
    component: (
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemText primary="Excavator #1 - Site A" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Haul Truck #3 - Site B" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Drill Rig #2 - Site A" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Loader #4 - Site C" />
        </ListItem>
      </List>
    ),
  },
  {
    title: "List with Icons",
    description: "List items with leading icons",
    code: `import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  <ListItem>
    <ListItemIcon>
      <InboxIcon />
    </ListItemIcon>
    <ListItemText primary="Inbox" secondary="Mining reports" />
  </ListItem>
  <ListItem>
    <ListItemIcon>
      <DraftsIcon />
    </ListItemIcon>
    <ListItemText primary="Drafts" secondary="Saved documents" />
  </ListItem>
</List>`,
    component: (
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" secondary="Mining reports" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" secondary="Saved documents" />
        </ListItem>
      </List>
    ),
  },
  {
    title: "List with Avatars",
    description: "List items with avatar images",
    code: `import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <WorkIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Work Site A" secondary="Active operations" />
  </ListItem>
  <ListItem>
    <ListItemAvatar>
      <Avatar>
        <BeachAccessIcon />
      </Avatar>
    </ListItemAvatar>
    <ListItemText primary="Site B" secondary="Maintenance scheduled" />
  </ListItem>
</List>`,
    component: (
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Work Site A" secondary="Active operations" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Site B" secondary="Maintenance scheduled" />
        </ListItem>
      </List>
    ),
  },
  {
    title: "Interactive List",
    description: "Clickable list items with hover effects",
    code: `import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';

<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  <ListItemButton>
    <ListItemIcon>
      <SettingsIcon />
    </ListItemIcon>
    <ListItemText primary="Settings" />
  </ListItemButton>
  <ListItemButton>
    <ListItemIcon>
      <NotificationsIcon />
    </ListItemIcon>
    <ListItemText primary="Notifications" />
  </ListItemButton>
  <ListItemButton>
    <ListItemIcon>
      <PersonIcon />
    </ListItemIcon>
    <ListItemText primary="Profile" />
  </ListItemButton>
</List>`,
    component: (
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </List>
    ),
  },
  {
    title: "List with Dividers",
    description: "List items separated by dividers",
    code: `import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  <ListItem>
    <ListItemText 
      primary="Excavator Status" 
      secondary="Online - 99.5% uptime" 
    />
  </ListItem>
  <Divider component="li" />
  <ListItem>
    <ListItemText 
      primary="Haul Truck Status" 
      secondary="Online - 98.2% uptime" 
    />
  </ListItem>
  <Divider component="li" />
  <ListItem>
    <ListItemText 
      primary="Drill Rig Status" 
      secondary="Maintenance - 95.7% uptime" 
    />
  </ListItem>
</List>`,
    component: (
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemText
            primary="Excavator Status"
            secondary="Online - 99.5% uptime"
          />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText
            primary="Haul Truck Status"
            secondary="Online - 98.2% uptime"
          />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText
            primary="Drill Rig Status"
            secondary="Maintenance - 95.7% uptime"
          />
        </ListItem>
      </List>
    ),
  },
  {
    title: "List with Secondary Actions",
    description: "List items with action buttons",
    code: `import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  <ListItem
    secondaryAction={
      <IconButton edge="end" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    }
  >
    <ListItemText 
      primary="Equipment Alert #1" 
      secondary="Temperature warning" 
    />
  </ListItem>
  <ListItem
    secondaryAction={
      <IconButton edge="end" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    }
  >
    <ListItemText 
      primary="Equipment Alert #2" 
      secondary="Fuel level low" 
    />
  </ListItem>
</List>`,
    component: (
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary="Equipment Alert #1"
            secondary="Temperature warning"
          />
        </ListItem>
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText
            primary="Equipment Alert #2"
            secondary="Fuel level low"
          />
        </ListItem>
      </List>
    ),
  },
  {
    title: "Nested List",
    description: "List with collapsible nested items",
    code: `import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/Inbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';

const [open, setOpen] = React.useState(true);

<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  <ListItemButton onClick={() => setOpen(!open)}>
    <ListItemIcon>
      <InboxIcon />
    </ListItemIcon>
    <ListItemText primary="Mining Sites" />
    {open ? <ExpandLess /> : <ExpandMore />}
  </ListItemButton>
  <Collapse in={open} timeout="auto" unmountOnExit>
    <List component="div" disablePadding>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Site A" />
      </ListItemButton>
      <ListItemButton sx={{ pl: 4 }}>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Site B" />
      </ListItemButton>
    </List>
  </Collapse>
</List>`,
    component: (() => {
      const NestedListExample = () => {
        const [open, setOpen] = React.useState(true);

        return (
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItemButton onClick={() => setOpen(!open)}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Mining Sites" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Site A" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarIcon />
                  </ListItemIcon>
                  <ListItemText primary="Site B" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        );
      };

      return <NestedListExample />;
    })(),
  },
  {
    title: "Checkbox List",
    description: "List with selectable checkboxes",
    code: `import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

const [checked, setChecked] = React.useState([0]);

const handleToggle = (value: number) => {
  const currentIndex = checked.indexOf(value);
  const newChecked = [...checked];

  if (currentIndex === -1) {
    newChecked.push(value);
  } else {
    newChecked.splice(currentIndex, 1);
  }

  setChecked(newChecked);
};

<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  {['Excavator #1', 'Haul Truck #3', 'Drill Rig #2'].map((text, index) => (
    <ListItem key={index} disablePadding>
      <ListItemButton onClick={() => handleToggle(index)} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked.indexOf(index) !== -1}
            tabIndex={-1}
            disableRipple
          />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  ))}
</List>`,
    component: (() => {
      const CheckboxListExample = () => {
        const [checked, setChecked] = React.useState([0]);

        const handleToggle = (value: number) => {
          const currentIndex = checked.indexOf(value);
          const newChecked = [...checked];

          if (currentIndex === -1) {
            newChecked.push(value);
          } else {
            newChecked.splice(currentIndex, 1);
          }

          setChecked(newChecked);
        };

        return (
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {["Excavator #1", "Haul Truck #3", "Drill Rig #2"].map(
              (text, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={() => handleToggle(index)} dense>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(index) !== -1}
                        tabIndex={-1}
                        disableRipple
                      />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        );
      };

      return <CheckboxListExample />;
    })(),
  },
];
