"use client";

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ComponentExample } from "../../types";

const cumulativeData = [
  { week: "Week 1", ore: 4000, waste: 2400, total: 6400 },
  { week: "Week 2", ore: 7000, waste: 3800, total: 10800 },
  { week: "Week 3", ore: 9000, waste: 6200, total: 15200 },
  { week: "Week 4", ore: 12780, waste: 8100, total: 20880 },
  { week: "Week 5", ore: 14670, waste: 9900, total: 24570 },
  { week: "Week 6", ore: 17060, waste: 13700, total: 30760 },
];

const energyData = [
  { hour: "00:00", diesel: 120, electric: 80 },
  { hour: "04:00", diesel: 240, electric: 160 },
  { hour: "08:00", diesel: 450, electric: 320 },
  { hour: "12:00", diesel: 680, electric: 480 },
  { hour: "16:00", diesel: 920, electric: 650 },
  { hour: "20:00", diesel: 1150, electric: 810 },
  { hour: "24:00", diesel: 1380, electric: 970 },
];

const productionTrend = [
  { month: "Jan", excavation: 4000, processing: 3000, shipping: 2400 },
  { month: "Feb", excavation: 7000, processing: 5500, shipping: 4500 },
  { month: "Mar", excavation: 9000, processing: 7800, shipping: 6600 },
  { month: "Apr", excavation: 11780, processing: 10200, shipping: 8900 },
  { month: "May", excavation: 13890, processing: 12500, shipping: 11200 },
  { month: "Jun", excavation: 16390, processing: 15100, shipping: 13800 },
];

export const areaChartExamples: ComponentExample[] = [
  {
    title: "Basic Area Chart",
    description: "Display cumulative production over time",
    code: `import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { week: 'Week 1', ore: 4000, waste: 2400 },
  { week: 'Week 2', ore: 7000, waste: 3800 },
  { week: 'Week 3', ore: 9000, waste: 6200 },
  { week: 'Week 4', ore: 12780, waste: 8100 },
  { week: 'Week 5', ore: 14670, waste: 9900 },
  { week: 'Week 6', ore: 17060, waste: 13700 },
];

<ResponsiveContainer width="100%" height={300}>
  <AreaChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="week" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Area type="monotone" dataKey="ore" stroke="#1890ff" fill="#1890ff" />
    <Area type="monotone" dataKey="waste" stroke="#52c41a" fill="#52c41a" />
  </AreaChart>
</ResponsiveContainer>`,
    component: (
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={cumulativeData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="ore"
            stroke="#1890ff"
            fill="#1890ff"
            fillOpacity={0.6}
            name="Ore (tons)"
          />
          <Area
            type="monotone"
            dataKey="waste"
            stroke="#52c41a"
            fill="#52c41a"
            fillOpacity={0.6}
            name="Waste (tons)"
          />
        </AreaChart>
      </ResponsiveContainer>
    ),
  },
  {
    title: "Stacked Area Chart",
    description: "Show cumulative energy consumption breakdown",
    code: `import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { hour: '00:00', diesel: 120, electric: 80 },
  { hour: '04:00', diesel: 240, electric: 160 },
  { hour: '08:00', diesel: 450, electric: 320 },
  { hour: '12:00', diesel: 680, electric: 480 },
  { hour: '16:00', diesel: 920, electric: 650 },
  { hour: '20:00', diesel: 1150, electric: 810 },
  { hour: '24:00', diesel: 1380, electric: 970 },
];

<ResponsiveContainer width="100%" height={300}>
  <AreaChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="hour" />
    <YAxis label={{ value: 'kWh', angle: -90, position: 'insideLeft' }} />
    <Tooltip />
    <Legend />
    <Area type="monotone" dataKey="diesel" stackId="1" stroke="#fa8c16" fill="#fa8c16" />
    <Area type="monotone" dataKey="electric" stackId="1" stroke="#52c41a" fill="#52c41a" />
  </AreaChart>
</ResponsiveContainer>`,
    component: (
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={energyData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis label={{ value: "kWh", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="diesel"
            stackId="1"
            stroke="#fa8c16"
            fill="#fa8c16"
            fillOpacity={0.8}
            name="Diesel"
          />
          <Area
            type="monotone"
            dataKey="electric"
            stackId="1"
            stroke="#52c41a"
            fill="#52c41a"
            fillOpacity={0.8}
            name="Electric"
          />
        </AreaChart>
      </ResponsiveContainer>
    ),
  },
  {
    title: "Multi-Stage Production Flow",
    description: "Track production through different stages",
    code: `import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', excavation: 4000, processing: 3000, shipping: 2400 },
  { month: 'Feb', excavation: 7000, processing: 5500, shipping: 4500 },
  { month: 'Mar', excavation: 9000, processing: 7800, shipping: 6600 },
  { month: 'Apr', excavation: 11780, processing: 10200, shipping: 8900 },
  { month: 'May', excavation: 13890, processing: 12500, shipping: 11200 },
  { month: 'Jun', excavation: 16390, processing: 15100, shipping: 13800 },
];

<ResponsiveContainer width="100%" height={300}>
  <AreaChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Area type="monotone" dataKey="excavation" stroke="#1890ff" fill="#1890ff" fillOpacity={0.3} />
    <Area type="monotone" dataKey="processing" stroke="#52c41a" fill="#52c41a" fillOpacity={0.3} />
    <Area type="monotone" dataKey="shipping" stroke="#faad14" fill="#faad14" fillOpacity={0.3} />
  </AreaChart>
</ResponsiveContainer>`,
    component: (
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={productionTrend}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="excavation"
            stroke="#1890ff"
            fill="#1890ff"
            fillOpacity={0.3}
            name="Excavation"
          />
          <Area
            type="monotone"
            dataKey="processing"
            stroke="#52c41a"
            fill="#52c41a"
            fillOpacity={0.3}
            name="Processing"
          />
          <Area
            type="monotone"
            dataKey="shipping"
            stroke="#faad14"
            fill="#faad14"
            fillOpacity={0.3}
            name="Shipping"
          />
        </AreaChart>
      </ResponsiveContainer>
    ),
  },
];
