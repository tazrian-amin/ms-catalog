"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ComponentExample } from "../../types";

const productionData = [
  { month: "Jan", ore: 4000, waste: 2400 },
  { month: "Feb", ore: 3000, waste: 1398 },
  { month: "Mar", ore: 2000, waste: 9800 },
  { month: "Apr", ore: 2780, waste: 3908 },
  { month: "May", ore: 1890, waste: 4800 },
  { month: "Jun", ore: 2390, waste: 3800 },
];

const equipmentData = [
  { time: "00:00", excavator: 85, haul: 78, drill: 92 },
  { time: "04:00", excavator: 88, haul: 82, drill: 89 },
  { time: "08:00", excavator: 92, haul: 85, drill: 95 },
  { time: "12:00", excavator: 87, haul: 80, drill: 88 },
  { time: "16:00", excavator: 90, haul: 88, drill: 93 },
  { time: "20:00", excavator: 85, haul: 75, drill: 87 },
];

const temperatureData = [
  { time: "00:00", engine: 65, hydraulic: 58, transmission: 62 },
  { time: "04:00", engine: 72, hydraulic: 65, transmission: 68 },
  { time: "08:00", engine: 85, hydraulic: 78, transmission: 80 },
  { time: "12:00", engine: 92, hydraulic: 88, transmission: 90 },
  { time: "16:00", engine: 88, hydraulic: 82, transmission: 85 },
  { time: "20:00", engine: 75, hydraulic: 68, transmission: 72 },
];

export const lineChartExamples: ComponentExample[] = [
  {
    title: "Basic Line Chart",
    description: "Simple line chart showing production trends",
    code: `import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', ore: 4000, waste: 2400 },
  { month: 'Feb', ore: 3000, waste: 1398 },
  { month: 'Mar', ore: 2000, waste: 9800 },
  { month: 'Apr', ore: 2780, waste: 3908 },
  { month: 'May', ore: 1890, waste: 4800 },
  { month: 'Jun', ore: 2390, waste: 3800 },
];

<ResponsiveContainer width="100%" height={300}>
  <LineChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="ore" stroke="#8884d8" />
    <Line type="monotone" dataKey="waste" stroke="#82ca9d" />
  </LineChart>
</ResponsiveContainer>`,
    component: (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={productionData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="ore"
            stroke="#8884d8"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="waste"
            stroke="#82ca9d"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    ),
  },
  {
    title: "Equipment Performance Monitoring",
    description: "Track equipment efficiency throughout the day",
    code: `import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', excavator: 85, haul: 78, drill: 92 },
  { time: '04:00', excavator: 88, haul: 82, drill: 89 },
  { time: '08:00', excavator: 92, haul: 85, drill: 95 },
  { time: '12:00', excavator: 87, haul: 80, drill: 88 },
  { time: '16:00', excavator: 90, haul: 88, drill: 93 },
  { time: '20:00', excavator: 85, haul: 75, drill: 87 },
];

<ResponsiveContainer width="100%" height={300}>
  <LineChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="time" />
    <YAxis label={{ value: 'Efficiency %', angle: -90, position: 'insideLeft' }} />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="excavator" stroke="#1890ff" strokeWidth={2} />
    <Line type="monotone" dataKey="haul" stroke="#52c41a" strokeWidth={2} />
    <Line type="monotone" dataKey="drill" stroke="#faad14" strokeWidth={2} />
  </LineChart>
</ResponsiveContainer>`,
    component: (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={equipmentData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis
            label={{
              value: "Efficiency %",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="excavator"
            stroke="#1890ff"
            strokeWidth={2}
            name="Excavator"
          />
          <Line
            type="monotone"
            dataKey="haul"
            stroke="#52c41a"
            strokeWidth={2}
            name="Haul Truck"
          />
          <Line
            type="monotone"
            dataKey="drill"
            stroke="#faad14"
            strokeWidth={2}
            name="Drill Rig"
          />
        </LineChart>
      </ResponsiveContainer>
    ),
  },
  {
    title: "Temperature Monitoring",
    description: "Monitor equipment temperature trends with smooth curves",
    code: `import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', engine: 65, hydraulic: 58, transmission: 62 },
  { time: '04:00', engine: 72, hydraulic: 65, transmission: 68 },
  { time: '08:00', engine: 85, hydraulic: 78, transmission: 80 },
  { time: '12:00', engine: 92, hydraulic: 88, transmission: 90 },
  { time: '16:00', engine: 88, hydraulic: 82, transmission: 85 },
  { time: '20:00', engine: 75, hydraulic: 68, transmission: 72 },
];

<ResponsiveContainer width="100%" height={300}>
  <LineChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="time" />
    <YAxis label={{ value: 'Temperature (°C)', angle: -90, position: 'insideLeft' }} />
    <Tooltip />
    <Legend />
    <Line type="natural" dataKey="engine" stroke="#ff4d4f" strokeWidth={2} />
    <Line type="natural" dataKey="hydraulic" stroke="#fa8c16" strokeWidth={2} />
    <Line type="natural" dataKey="transmission" stroke="#fadb14" strokeWidth={2} />
  </LineChart>
</ResponsiveContainer>`,
    component: (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={temperatureData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis
            label={{
              value: "Temperature (°C)",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <Legend />
          <Line
            type="natural"
            dataKey="engine"
            stroke="#ff4d4f"
            strokeWidth={2}
            name="Engine"
          />
          <Line
            type="natural"
            dataKey="hydraulic"
            stroke="#fa8c16"
            strokeWidth={2}
            name="Hydraulic"
          />
          <Line
            type="natural"
            dataKey="transmission"
            stroke="#fadb14"
            strokeWidth={2}
            name="Transmission"
          />
        </LineChart>
      </ResponsiveContainer>
    ),
  },
];
