"use client";

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ComponentExample } from "../../types";

export const cardExamples: ComponentExample[] = [
  {
    title: "Basic Card",
    description: "Simple card with content",
    code: `import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

<Card sx={{ maxWidth: 345 }}>
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Mining Sentry
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Advanced monitoring and analytics platform for mining operations.
      Real-time insights and predictive maintenance capabilities.
    </Typography>
  </CardContent>
</Card>`,
    component: (
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Mining Sentry
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Advanced monitoring and analytics platform for mining operations.
            Real-time insights and predictive maintenance capabilities.
          </Typography>
        </CardContent>
      </Card>
    ),
  },
  {
    title: "Card with Actions",
    description: "Card with action buttons",
    code: `import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

<Card sx={{ maxWidth: 345 }}>
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Equipment Monitor
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Monitor your mining equipment in real-time with advanced sensors
      and analytics.
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Learn More</Button>
    <Button size="small">View Details</Button>
  </CardActions>
</Card>`,
    component: (
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Equipment Monitor
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Monitor your mining equipment in real-time with advanced sensors and
            analytics.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
          <Button size="small">View Details</Button>
        </CardActions>
      </Card>
    ),
  },
  {
    title: "Card with Image",
    description: "Card with image, content and actions",
    code: `import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

<Card sx={{ maxWidth: 345 }}>
  <CardMedia
    component="img"
    height="140"
    image="https://as1.ftcdn.net/v2/jpg/18/45/25/48/1000_F_1845254854_lQu6J9We0uStUbOwgpWecLQgM14mEWtI.jpg"
    alt="Mining equipment"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="div">
      Excavator XL-2000
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Heavy-duty excavator designed for large-scale mining operations.
      Features advanced hydraulics and fuel-efficient engine technology.
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">View Specs</Button>
    <Button size="small">Schedule Demo</Button>
  </CardActions>
</Card>`,
    component: (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://as1.ftcdn.net/v2/jpg/18/45/25/48/1000_F_1845254854_lQu6J9We0uStUbOwgpWecLQgM14mEWtI.jpg"
          alt="Mining equipment"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Haul Truck
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Heavy-duty haul truck designed for large-scale mining operations.
            Features advanced hydraulics and fuel-efficient engine technology.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View Specs</Button>
          <Button size="small">Schedule Demo</Button>
        </CardActions>
      </Card>
    ),
  },
];
