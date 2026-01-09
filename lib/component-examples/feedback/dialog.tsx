"use client";

import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { ComponentExample } from "../../types";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<React.ReactNode>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const dialogExamples: ComponentExample[] = [
  {
    title: "Basic Dialog",
    description: "Simple dialog with title and actions",
    code: `import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const [open, setOpen] = React.useState(false);

<div>
  <Button variant="outlined" onClick={() => setOpen(true)}>
    Open Dialog
  </Button>
  <Dialog open={open} onClose={() => setOpen(false)}>
    <DialogTitle>Equipment Alert</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Excavator #1 has completed its scheduled maintenance. 
        The equipment is ready to return to active service.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpen(false)}>Cancel</Button>
      <Button onClick={() => setOpen(false)} autoFocus>
        Acknowledge
      </Button>
    </DialogActions>
  </Dialog>
</div>`,
    component: (() => {
      const BasicDialogExample = () => {
        const [open, setOpen] = React.useState(false);

        return (
          <div>
            <Button variant="outlined" onClick={() => setOpen(true)}>
              Open Dialog
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>Equipment Alert</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Excavator #1 has completed its scheduled maintenance. The
                  equipment is ready to return to active service.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => setOpen(false)} autoFocus>
                  Acknowledge
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      };

      return <BasicDialogExample />;
    })(),
  },
  {
    title: "Alert Dialog",
    description: "Confirmation dialog for critical actions",
    code: `import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const [open, setOpen] = React.useState(false);

<div>
  <Button variant="outlined" color="error" onClick={() => setOpen(true)}>
    Shutdown Equipment
  </Button>
  <Dialog open={open} onClose={() => setOpen(false)}>
    <DialogTitle>Confirm Equipment Shutdown</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Are you sure you want to shutdown Haul Truck #3? 
        This action will stop all operations immediately.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpen(false)}>Cancel</Button>
      <Button onClick={() => setOpen(false)} color="error" autoFocus>
        Shutdown
      </Button>
    </DialogActions>
  </Dialog>
</div>`,
    component: (() => {
      const AlertDialogExample = () => {
        const [open, setOpen] = React.useState(false);

        return (
          <div>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setOpen(true)}
            >
              Shutdown Equipment
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>Confirm Equipment Shutdown</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Are you sure you want to shutdown Haul Truck #3? This action
                  will stop all operations immediately.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => setOpen(false)} color="error" autoFocus>
                  Shutdown
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      };

      return <AlertDialogExample />;
    })(),
  },
  {
    title: "Form Dialog",
    description: "Dialog with form inputs",
    code: `import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const [open, setOpen] = React.useState(false);

<div>
  <Button variant="outlined" onClick={() => setOpen(true)}>
    Add Equipment
  </Button>
  <Dialog open={open} onClose={() => setOpen(false)}>
    <DialogTitle>Add New Equipment</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Enter the details of the new mining equipment to add to the inventory.
      </DialogContentText>
      <TextField
        autoFocus
        margin="dense"
        label="Equipment Name"
        type="text"
        fullWidth
        variant="standard"
      />
      <TextField
        margin="dense"
        label="Serial Number"
        type="text"
        fullWidth
        variant="standard"
      />
      <TextField
        margin="dense"
        label="Site Location"
        type="text"
        fullWidth
        variant="standard"
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpen(false)}>Cancel</Button>
      <Button onClick={() => setOpen(false)}>Add Equipment</Button>
    </DialogActions>
  </Dialog>
</div>`,
    component: (() => {
      const FormDialogExample = () => {
        const [open, setOpen] = React.useState(false);

        return (
          <div>
            <Button variant="outlined" onClick={() => setOpen(true)}>
              Add Equipment
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>Add New Equipment</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Enter the details of the new mining equipment to add to the
                  inventory.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  label="Equipment Name"
                  type="text"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  margin="dense"
                  label="Serial Number"
                  type="text"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  margin="dense"
                  label="Site Location"
                  type="text"
                  fullWidth
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button onClick={() => setOpen(false)}>Add Equipment</Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      };

      return <FormDialogExample />;
    })(),
  },
  {
    title: "Full Screen Dialog",
    description: "Dialog that takes up the full screen with close button",
    code: `import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';

const [open, setOpen] = React.useState(false);

<div>
  <Button variant="outlined" onClick={() => setOpen(true)}>
    View Equipment Details
  </Button>
  <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
    <AppBar sx={{ position: 'relative' }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => setOpen(false)}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
          Equipment Details - Excavator #1
        </Typography>
      </Toolbar>
    </AppBar>
    <DialogContent>
      <Typography variant="body1" paragraph>
        <strong>Serial Number:</strong> EXC-2024-001
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Model:</strong> CAT 390F L
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Location:</strong> Site A - North Pit
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Status:</strong> Active
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Last Maintenance:</strong> 2024-01-05
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Next Maintenance:</strong> 2024-04-05
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Operating Hours:</strong> 2,456 hours
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Fuel Level:</strong> 87%
      </Typography>
    </DialogContent>
  </Dialog>
</div>`,
    component: (() => {
      const FullScreenDialogExample = () => {
        const [open, setOpen] = React.useState(false);

        return (
          <div>
            <Button variant="outlined" onClick={() => setOpen(true)}>
              View Equipment Details
            </Button>
            <Dialog fullScreen open={open} onClose={() => setOpen(false)}>
              <AppBar sx={{ position: "relative" }}>
                <Toolbar>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={() => setOpen(false)}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography
                    sx={{ ml: 2, flex: 1 }}
                    variant="h6"
                    component="div"
                  >
                    Equipment Details - Excavator #1
                  </Typography>
                </Toolbar>
              </AppBar>
              <DialogContent>
                <Typography variant="body1" paragraph>
                  <strong>Serial Number:</strong> EXC-2024-001
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Model:</strong> CAT 390F L
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Location:</strong> Site A - North Pit
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Status:</strong> Active
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Last Maintenance:</strong> 2024-01-05
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Next Maintenance:</strong> 2024-04-05
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Operating Hours:</strong> 2,456 hours
                </Typography>
                <Typography variant="body1" paragraph>
                  <strong>Fuel Level:</strong> 87%
                </Typography>
              </DialogContent>
            </Dialog>
          </div>
        );
      };

      return <FullScreenDialogExample />;
    })(),
  },
  {
    title: "Max Width Dialog",
    description: "Dialog with different max width options",
    code: `import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const [open, setOpen] = React.useState(false);

<div>
  <Button variant="outlined" onClick={() => setOpen(true)}>
    Open Large Dialog
  </Button>
  <Dialog 
    open={open} 
    onClose={() => setOpen(false)}
    maxWidth="md"
    fullWidth
  >
    <DialogTitle>Equipment Performance Report</DialogTitle>
    <DialogContent>
      <DialogContentText>
        This dialog displays detailed performance metrics for all mining 
        equipment across all sites. The data includes efficiency ratings, 
        fuel consumption, maintenance history, and operational statistics.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpen(false)}>Close</Button>
    </DialogActions>
  </Dialog>
</div>`,
    component: (() => {
      const MaxWidthDialogExample = () => {
        const [open, setOpen] = React.useState(false);

        return (
          <div>
            <Button variant="outlined" onClick={() => setOpen(true)}>
              Open Large Dialog
            </Button>
            <Dialog
              open={open}
              onClose={() => setOpen(false)}
              maxWidth="md"
              fullWidth
            >
              <DialogTitle>Equipment Performance Report</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  This dialog displays detailed performance metrics for all
                  mining equipment across all sites. The data includes
                  efficiency ratings, fuel consumption, maintenance history, and
                  operational statistics.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Close</Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      };

      return <MaxWidthDialogExample />;
    })(),
  },
  {
    title: "Scrollable Dialog",
    description: "Dialog with scrollable content",
    code: `import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const [open, setOpen] = React.useState(false);

<div>
  <Button variant="outlined" onClick={() => setOpen(true)}>
    View Maintenance Log
  </Button>
  <Dialog open={open} onClose={() => setOpen(false)}>
    <DialogTitle>Maintenance Log - Excavator #1</DialogTitle>
    <DialogContent dividers>
      <DialogContentText>
        {[...Array(20)].map((_, i) => (
          <div key={i}>
            2024-01-{String(i + 1).padStart(2, '0')}: Routine inspection completed.
            <br />
          </div>
        ))}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpen(false)}>Close</Button>
    </DialogActions>
  </Dialog>
</div>`,
    component: (() => {
      const ScrollableDialogExample = () => {
        const [open, setOpen] = React.useState(false);

        return (
          <div>
            <Button variant="outlined" onClick={() => setOpen(true)}>
              View Maintenance Log
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>Maintenance Log - Excavator #1</DialogTitle>
              <DialogContent dividers>
                <DialogContentText component="div">
                  {[...Array(20)].map((_, i) => (
                    <div key={i}>
                      2024-01-{String(i + 1).padStart(2, "0")}: Routine
                      inspection completed.
                      <br />
                    </div>
                  ))}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Close</Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      };

      return <ScrollableDialogExample />;
    })(),
  },
  {
    title: "Selection Dialog",
    description: "Dialog for selecting from a list",
    code: `import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

const [open, setOpen] = React.useState(false);
const [selected, setSelected] = React.useState('');

const sites = ['Site A - North Pit', 'Site B - South Pit', 'Site C - Processing'];

const handleSelect = (value: string) => {
  setSelected(value);
  setOpen(false);
};

<div>
  <Button variant="outlined" onClick={() => setOpen(true)}>
    Select Site
  </Button>
  <Dialog open={open} onClose={() => setOpen(false)}>
    <DialogTitle>Select Site Location</DialogTitle>
    <List sx={{ pt: 0 }}>
      {sites.map((site) => (
        <ListItem disableGutters key={site}>
          <ListItemButton onClick={() => handleSelect(site)}>
            <ListItemText primary={site} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Dialog>
  {selected && <p className="text-gray-900">Selected: {selected}</p>}
</div>`,
    component: (() => {
      const SelectionDialogExample = () => {
        const [open, setOpen] = React.useState(false);
        const [selected, setSelected] = React.useState("");

        const sites = [
          "Site A - North Pit",
          "Site B - South Pit",
          "Site C - Processing",
        ];

        const handleSelect = (value: string) => {
          setSelected(value);
          setOpen(false);
        };

        return (
          <div>
            <Button variant="outlined" onClick={() => setOpen(true)}>
              Select Site
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)}>
              <DialogTitle>Select Site Location</DialogTitle>
              <List sx={{ pt: 0 }}>
                {sites.map((site) => (
                  <ListItem disableGutters key={site}>
                    <ListItemButton onClick={() => handleSelect(site)}>
                      <ListItemText primary={site} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Dialog>
            {selected && (
              <p className="text-gray-900" style={{ marginTop: "8px" }}>
                Selected: {selected}
              </p>
            )}
          </div>
        );
      };

      return <SelectionDialogExample />;
    })(),
  },
  {
    title: "Transition Dialog",
    description: "Dialog with custom transition animation",
    code: `import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const [open, setOpen] = React.useState(false);

<div>
  <Button variant="outlined" onClick={() => setOpen(true)}>
    Open with Transition
  </Button>
  <Dialog
    open={open}
    slots={{ transition: Transition }}
    onClose={() => setOpen(false)}
  >
    <DialogTitle>Equipment Alert</DialogTitle>
    <DialogContent>
      <DialogContentText>
        This dialog slides up from the bottom with a smooth transition.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpen(false)}>Close</Button>
    </DialogActions>
  </Dialog>
</div>`,
    component: (() => {
      const TransitionDialogExample = () => {
        const [open, setOpen] = React.useState(false);

        return (
          <div>
            <Button variant="outlined" onClick={() => setOpen(true)}>
              Open with Transition
            </Button>
            <Dialog
              open={open}
              slots={{ transition: Transition }}
              onClose={() => setOpen(false)}
            >
              <DialogTitle>Equipment Alert</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  This dialog slides up from the bottom with a smooth
                  transition.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)}>Close</Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      };

      return <TransitionDialogExample />;
    })(),
  },
  {
    title: "Dialog Without Close on Backdrop",
    description: "Dialog that requires explicit user action",
    code: `import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const [open, setOpen] = React.useState(false);

<div>
  <Button variant="outlined" color="warning" onClick={() => setOpen(true)}>
    Critical Action
  </Button>
  <Dialog 
    open={open} 
    onClose={(event, reason) => {
      if (reason !== 'backdropClick') {
        setOpen(false);
      }
    }}
    disableEscapeKeyDown
  >
    <DialogTitle>Critical Equipment Warning</DialogTitle>
    <DialogContent>
      <DialogContentText>
        Temperature levels are reaching critical thresholds. 
        You must acknowledge this warning before continuing.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpen(false)} color="warning">
        Acknowledge
      </Button>
    </DialogActions>
  </Dialog>
</div>`,
    component: (() => {
      const NoBackdropCloseDialogExample = () => {
        const [open, setOpen] = React.useState(false);

        return (
          <div>
            <Button
              variant="outlined"
              color="warning"
              onClick={() => setOpen(true)}
            >
              Critical Action
            </Button>
            <Dialog
              open={open}
              onClose={(event, reason) => {
                if (reason !== "backdropClick") {
                  setOpen(false);
                }
              }}
              disableEscapeKeyDown
            >
              <DialogTitle>Critical Equipment Warning</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Temperature levels are reaching critical thresholds. You must
                  acknowledge this warning before continuing.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setOpen(false)} color="warning">
                  Acknowledge
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        );
      };

      return <NoBackdropCloseDialogExample />;
    })(),
  },
];
