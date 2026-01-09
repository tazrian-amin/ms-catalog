"use client";

import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ComponentExample } from "../../types";

const performanceData = [
  { month: "Jan", production: 4000, efficiency: 85, target: 4500 },
  { month: "Feb", production: 3000, efficiency: 75, target: 3500 },
  { month: "Mar", production: 4500, efficiency: 92, target: 4000 },
  { month: "Apr", production: 3780, efficiency: 88, target: 4200 },
  { month: "May", production: 4890, efficiency: 95, target: 4500 },
  { month: "Jun", production: 5390, efficiency: 98, target: 5000 },
];

const operationalData = [
  { week: "Week 1", revenue: 450, costs: 280, efficiency: 75 },
  { week: "Week 2", revenue: 520, costs: 310, efficiency: 82 },
  { week: "Week 3", revenue: 480, costs: 290, efficiency: 78 },
  { week: "Week 4", revenue: 590, costs: 320, efficiency: 88 },
  { week: "Week 5", revenue: 620, costs: 330, efficiency: 92 },
  { week: "Week 6", revenue: 680, costs: 350, efficiency: 95 },
];

const safetyData = [
  { month: "Jan", incidents: 5, nearMiss: 12, score: 88 },
  { month: "Feb", incidents: 3, nearMiss: 8, score: 92 },
  { month: "Mar", incidents: 2, nearMiss: 6, score: 95 },
  { month: "Apr", incidents: 1, nearMiss: 4, score: 97 },
  { month: "May", incidents: 0, nearMiss: 3, score: 99 },
  { month: "Jun", incidents: 1, nearMiss: 5, score: 96 },
];

export const composedChartExamples: ComponentExample[] = [
  {
    title: "Production vs Efficiency",
    description:
      "Combine bar and line charts to show production and efficiency",
    code: `import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', production: 4000, efficiency: 85, target: 4500 },
  { month: 'Feb', production: 3000, efficiency: 75, target: 3500 },
  { month: 'Mar', production: 4500, efficiency: 92, target: 4000 },
  { month: 'Apr', production: 3780, efficiency: 88, target: 4200 },
  { month: 'May', production: 4890, efficiency: 95, target: 4500 },
  { month: 'Jun', production: 5390, efficiency: 98, target: 5000 },
];

<ResponsiveContainer width="100%" height={300}>
  <ComposedChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis yAxisId="left" />
    <YAxis yAxisId="right" orientation="right" />
    <Tooltip />
    <Legend />
    <Bar yAxisId="left" dataKey="production" fill="#1890ff" />
    <Bar yAxisId="left" dataKey="target" fill="#d9d9d9" />
    <Line yAxisId="right" type="monotone" dataKey="efficiency" stroke="#52c41a" strokeWidth={2} />
  </ComposedChart>
</ResponsiveContainer>`,
    component: (
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={performanceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            yAxisId="left"
            label={{ value: "Tons", angle: -90, position: "insideLeft" }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{
              value: "Efficiency %",
              angle: 90,
              position: "insideRight",
            }}
          />
          <Tooltip />
          <Legend />
          <Bar
            yAxisId="left"
            dataKey="production"
            fill="#1890ff"
            name="Production"
          />
          <Bar yAxisId="left" dataKey="target" fill="#d9d9d9" name="Target" />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="efficiency"
            stroke="#52c41a"
            strokeWidth={2}
            name="Efficiency %"
          />
        </ComposedChart>
      </ResponsiveContainer>
    ),
  },
  {
    title: "Revenue, Costs & Efficiency",
    description: "Multi-metric analysis with bars, area, and line",
    code: `import { ComposedChart, Line, Bar, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { week: 'Week 1', revenue: 450, costs: 280, efficiency: 75 },
  { week: 'Week 2', revenue: 520, costs: 310, efficiency: 82 },
  { week: 'Week 3', revenue: 480, costs: 290, efficiency: 78 },
  { week: 'Week 4', revenue: 590, costs: 320, efficiency: 88 },
  { week: 'Week 5', revenue: 620, costs: 330, efficiency: 92 },
  { week: 'Week 6', revenue: 680, costs: 350, efficiency: 95 },
];

<ResponsiveContainer width="100%" height={300}>
  <ComposedChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="week" />
    <YAxis yAxisId="left" />
    <YAxis yAxisId="right" orientation="right" />
    <Tooltip />
    <Legend />
    <Bar yAxisId="left" dataKey="revenue" fill="#52c41a" />
    <Bar yAxisId="left" dataKey="costs" fill="#ff4d4f" />
    <Line yAxisId="right" type="monotone" dataKey="efficiency" stroke="#1890ff" strokeWidth={2} />
  </ComposedChart>
</ResponsiveContainer>`,
    component: (
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={operationalData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis
            yAxisId="left"
            label={{ value: "Amount ($K)", angle: -90, position: "insideLeft" }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{
              value: "Efficiency %",
              angle: 90,
              position: "insideRight",
            }}
          />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="revenue" fill="#52c41a" name="Revenue" />
          <Bar yAxisId="left" dataKey="costs" fill="#ff4d4f" name="Costs" />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="efficiency"
            stroke="#1890ff"
            strokeWidth={2}
            name="Efficiency %"
          />
        </ComposedChart>
      </ResponsiveContainer>
    ),
  },
  {
    title: "Safety Metrics Dashboard",
    description:
      "Combine multiple chart types for comprehensive safety analysis",
    code: `import { ComposedChart, Line, Bar, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', incidents: 5, nearMiss: 12, score: 88 },
  { month: 'Feb', incidents: 3, nearMiss: 8, score: 92 },
  { month: 'Mar', incidents: 2, nearMiss: 6, score: 95 },
  { month: 'Apr', incidents: 1, nearMiss: 4, score: 97 },
  { month: 'May', incidents: 0, nearMiss: 3, score: 99 },
  { month: 'Jun', incidents: 1, nearMiss: 5, score: 96 },
];

<ResponsiveContainer width="100%" height={300}>
  <ComposedChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis yAxisId="left" />
    <YAxis yAxisId="right" orientation="right" />
    <Tooltip />
    <Legend />
    <Area yAxisId="left" type="monotone" dataKey="nearMiss" fill="#faad14" stroke="#faad14" fillOpacity={0.3} />
    <Bar yAxisId="left" dataKey="incidents" fill="#ff4d4f" />
    <Line yAxisId="right" type="monotone" dataKey="score" stroke="#52c41a" strokeWidth={3} />
  </ComposedChart>
</ResponsiveContainer>`,
    component: (
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={safetyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            yAxisId="left"
            label={{ value: "Count", angle: -90, position: "insideLeft" }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            label={{
              value: "Safety Score",
              angle: 90,
              position: "insideRight",
            }}
          />
          <Tooltip />
          <Legend />
          <Area
            yAxisId="left"
            type="monotone"
            dataKey="nearMiss"
            fill="#faad14"
            stroke="#faad14"
            fillOpacity={0.3}
            name="Near Miss"
          />
          <Bar
            yAxisId="left"
            dataKey="incidents"
            fill="#ff4d4f"
            name="Incidents"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="score"
            stroke="#52c41a"
            strokeWidth={3}
            name="Safety Score"
          />
        </ComposedChart>
      </ResponsiveContainer>
    ),
  },
];
