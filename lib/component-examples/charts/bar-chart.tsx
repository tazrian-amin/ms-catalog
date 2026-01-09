"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ComponentExample } from "../../types";

const monthlyData = [
  { month: "Jan", production: 4000, target: 4500 },
  { month: "Feb", production: 3000, target: 3500 },
  { month: "Mar", production: 4500, target: 4000 },
  { month: "Apr", production: 3780, target: 4200 },
  { month: "May", production: 4890, target: 4500 },
  { month: "Jun", production: 5390, target: 5000 },
];

const equipmentDowntime = [
  { equipment: "Excavator #1", downtime: 12, planned: 8, unplanned: 4 },
  { equipment: "Haul Truck #3", downtime: 18, planned: 12, unplanned: 6 },
  { equipment: "Drill Rig #2", downtime: 8, planned: 6, unplanned: 2 },
  { equipment: "Loader #4", downtime: 15, planned: 10, unplanned: 5 },
  { equipment: "Excavator #2", downtime: 10, planned: 8, unplanned: 2 },
];

const siteComparison = [
  { site: "Site A", gold: 1200, copper: 800, iron: 1500 },
  { site: "Site B", gold: 900, copper: 1200, iron: 1800 },
  { site: "Site C", gold: 1500, copper: 600, iron: 1200 },
  { site: "Site D", gold: 1100, copper: 1000, iron: 1600 },
];

export const barChartExamples: ComponentExample[] = [
  {
    title: "Basic Bar Chart",
    description: "Compare production vs targets",
    code: `import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', production: 4000, target: 4500 },
  { month: 'Feb', production: 3000, target: 3500 },
  { month: 'Mar', production: 4500, target: 4000 },
  { month: 'Apr', production: 3780, target: 4200 },
  { month: 'May', production: 4890, target: 4500 },
  { month: 'Jun', production: 5390, target: 5000 },
];

<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="production" fill="#1890ff" />
    <Bar dataKey="target" fill="#52c41a" />
  </BarChart>
</ResponsiveContainer>`,
    component: (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={monthlyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="production" fill="#1890ff" name="Production (tons)" />
          <Bar dataKey="target" fill="#52c41a" name="Target (tons)" />
        </BarChart>
      </ResponsiveContainer>
    ),
  },
  {
    title: "Stacked Bar Chart",
    description: "Analyze equipment downtime by category",
    code: `import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { equipment: 'Excavator #1', planned: 8, unplanned: 4 },
  { equipment: 'Haul Truck #3', planned: 12, unplanned: 6 },
  { equipment: 'Drill Rig #2', planned: 6, unplanned: 2 },
  { equipment: 'Loader #4', planned: 10, unplanned: 5 },
  { equipment: 'Excavator #2', planned: 8, unplanned: 2 },
];

<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="equipment" />
    <YAxis label={{ value: 'Hours', angle: -90, position: 'insideLeft' }} />
    <Tooltip />
    <Legend />
    <Bar dataKey="planned" stackId="a" fill="#52c41a" />
    <Bar dataKey="unplanned" stackId="a" fill="#ff4d4f" />
  </BarChart>
</ResponsiveContainer>`,
    component: (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={equipmentDowntime}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="equipment" />
          <YAxis
            label={{ value: "Hours", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="planned"
            stackId="a"
            fill="#52c41a"
            name="Planned Downtime"
          />
          <Bar
            dataKey="unplanned"
            stackId="a"
            fill="#ff4d4f"
            name="Unplanned Downtime"
          />
        </BarChart>
      </ResponsiveContainer>
    ),
  },
  {
    title: "Grouped Bar Chart",
    description: "Compare mineral extraction across sites",
    code: `import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { site: 'Site A', gold: 1200, copper: 800, iron: 1500 },
  { site: 'Site B', gold: 900, copper: 1200, iron: 1800 },
  { site: 'Site C', gold: 1500, copper: 600, iron: 1200 },
  { site: 'Site D', gold: 1100, copper: 1000, iron: 1600 },
];

<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="site" />
    <YAxis label={{ value: 'Tons', angle: -90, position: 'insideLeft' }} />
    <Tooltip />
    <Legend />
    <Bar dataKey="gold" fill="#faad14" />
    <Bar dataKey="copper" fill="#fa8c16" />
    <Bar dataKey="iron" fill="#8c8c8c" />
  </BarChart>
</ResponsiveContainer>`,
    component: (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={siteComparison}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="site" />
          <YAxis
            label={{ value: "Tons", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="gold" fill="#faad14" name="Gold" />
          <Bar dataKey="copper" fill="#fa8c16" name="Copper" />
          <Bar dataKey="iron" fill="#8c8c8c" name="Iron" />
        </BarChart>
      </ResponsiveContainer>
    ),
  },
];
