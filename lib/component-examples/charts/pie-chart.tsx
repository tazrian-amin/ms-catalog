"use client";

import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieLabel,
} from "recharts";
import { ComponentExample } from "../../types";

const equipmentData = [
  { name: "Excavators", value: 12, color: "#1890ff" },
  { name: "Haul Trucks", value: 25, color: "#52c41a" },
  { name: "Drill Rigs", value: 8, color: "#faad14" },
  { name: "Loaders", value: 10, color: "#fa8c16" },
  { name: "Support", value: 15, color: "#722ed1" },
];

const mineralData = [
  { name: "Gold", value: 35, color: "#fadb14" },
  { name: "Copper", value: 28, color: "#fa8c16" },
  { name: "Iron", value: 22, color: "#8c8c8c" },
  { name: "Silver", value: 10, color: "#d9d9d9" },
  { name: "Other", value: 5, color: "#434343" },
];

const downtimeData = [
  { name: "Maintenance", value: 45, color: "#52c41a" },
  { name: "Repairs", value: 30, color: "#faad14" },
  { name: "Weather", value: 15, color: "#1890ff" },
  { name: "Other", value: 10, color: "#8c8c8c" },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const pieChartExamples: ComponentExample[] = [
  {
    title: "Basic Pie Chart",
    description: "Display equipment distribution across the site",
    code: `import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Excavators', value: 12 },
  { name: 'Haul Trucks', value: 25 },
  { name: 'Drill Rigs', value: 8 },
  { name: 'Loaders', value: 10 },
  { name: 'Support', value: 15 },
];

const COLORS = ['#1890ff', '#52c41a', '#faad14', '#fa8c16', '#722ed1'];

<ResponsiveContainer width="100%" height={300}>
  <PieChart>
    <Pie
      data={data}
      cx="50%"
      cy="50%"
      labelLine={false}
      outerRadius={80}
      fill="#8884d8"
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={\`cell-\${index}\`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
</ResponsiveContainer>`,
    component: (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={equipmentData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {equipmentData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    ),
  },
  {
    title: "Pie Chart with Labels",
    description: "Show mineral extraction percentages",
    code: `import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Gold', value: 35 },
  { name: 'Copper', value: 28 },
  { name: 'Iron', value: 22 },
  { name: 'Silver', value: 10 },
  { name: 'Other', value: 5 },
];

const COLORS = ['#fadb14', '#fa8c16', '#8c8c8c', '#d9d9d9', '#434343'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {\`\${(percent * 100).toFixed(0)}%\`}
    </text>
  );
};

<ResponsiveContainer width="100%" height={300}>
  <PieChart>
    <Pie
      data={data}
      cx="50%"
      cy="50%"
      labelLine={false}
      label={renderCustomizedLabel}
      outerRadius={80}
      fill="#8884d8"
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={\`cell-\${index}\`} fill={COLORS[index]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
</ResponsiveContainer>`,
    component: (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={mineralData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel as unknown as PieLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {mineralData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    ),
  },
  {
    title: "Donut Chart",
    description: "Analyze downtime causes with donut chart",
    code: `import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Maintenance', value: 45 },
  { name: 'Repairs', value: 30 },
  { name: 'Weather', value: 15 },
  { name: 'Other', value: 10 },
];

const COLORS = ['#52c41a', '#faad14', '#1890ff', '#8c8c8c'];

<ResponsiveContainer width="100%" height={300}>
  <PieChart>
    <Pie
      data={data}
      cx="50%"
      cy="50%"
      innerRadius={60}
      outerRadius={80}
      fill="#8884d8"
      paddingAngle={5}
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={\`cell-\${index}\`} fill={COLORS[index]} />
      ))}
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
</ResponsiveContainer>`,
    component: (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={downtimeData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {downtimeData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    ),
  },
];
