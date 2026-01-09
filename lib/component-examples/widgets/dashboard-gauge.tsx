"use client";

import React from "react";
import { Progress, Space } from "antd";
import { ComponentExample } from "../../types";

export const dashboardGaugeExamples: ComponentExample[] = [
  {
    title: "Basic Dashboard Gauge",
    description: "Circular dashboard-style gauges for KPI monitoring",
    code: `import { Progress } from 'antd';

<div className="flex gap-8 justify-center flex-wrap">
  <div className="text-center">
    <Progress type="circle" percent={75} />
    <div className="mt-2 text-sm text-gray-600">Overall Performance</div>
  </div>
  <div className="text-center">
    <Progress type="circle" percent={90} status="success" />
    <div className="mt-2 text-sm text-gray-600">Safety Rating</div>
  </div>
  <div className="text-center">
    <Progress type="circle" percent={40} status="exception" />
    <div className="mt-2 text-sm text-gray-600">Maintenance Due</div>
  </div>
</div>`,
    component: (
      <div className="flex gap-8 justify-center flex-wrap">
        <div className="text-center">
          <Progress type="circle" percent={75} />
          <div className="mt-2 text-sm text-gray-600">Overall Performance</div>
        </div>
        <div className="text-center">
          <Progress type="circle" percent={90} status="success" />
          <div className="mt-2 text-sm text-gray-600">Safety Rating</div>
        </div>
        <div className="text-center">
          <Progress type="circle" percent={40} status="exception" />
          <div className="mt-2 text-sm text-gray-600">Maintenance Due</div>
        </div>
      </div>
    ),
  },
  {
    title: "Custom Size Gauges",
    description: "Dashboard gauges in different sizes",
    code: `import { Progress, Space } from 'antd';

<Space size="large" className="flex justify-center flex-wrap">
  <div className="text-center">
    <Progress type="circle" percent={85} size={80} />
    <div className="mt-2 text-xs">Small</div>
  </div>
  <div className="text-center">
    <Progress type="circle" percent={85} />
    <div className="mt-2 text-sm">Medium</div>
  </div>
  <div className="text-center">
    <Progress type="circle" percent={85} size={150} />
    <div className="mt-2 text-base">Large</div>
  </div>
</Space>`,
    component: (
      <Space size="large" className="flex justify-center flex-wrap">
        <div className="text-center">
          <Progress type="circle" percent={85} size={80} />
          <div className="mt-2 text-xs">Small</div>
        </div>
        <div className="text-center">
          <Progress type="circle" percent={85} />
          <div className="mt-2 text-sm">Medium</div>
        </div>
        <div className="text-center">
          <Progress type="circle" percent={85} size={150} />
          <div className="mt-2 text-base">Large</div>
        </div>
      </Space>
    ),
  },
  {
    title: "Gradient Dashboard Gauges",
    description: "Gauges with custom gradient colors",
    code: `import { Progress } from 'antd';

<div className="flex gap-8 justify-center flex-wrap">
  <div className="text-center">
    <Progress
      type="circle"
      percent={72}
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
    />
    <div className="mt-2 text-sm text-gray-600">Excavator #1</div>
  </div>
  <div className="text-center">
    <Progress
      type="circle"
      percent={95}
      strokeColor={{
        '0%': '#87d068',
        '100%': '#52c41a',
      }}
    />
    <div className="mt-2 text-sm text-gray-600">Haul Truck #3</div>
  </div>
  <div className="text-center">
    <Progress
      type="circle"
      percent={48}
      strokeColor={{
        '0%': '#ffa940',
        '100%': '#ff4d4f',
      }}
    />
    <div className="mt-2 text-sm text-gray-600">Drill Rig #2</div>
  </div>
</div>`,
    component: (
      <div className="flex gap-8 justify-center flex-wrap">
        <div className="text-center">
          <Progress
            type="circle"
            percent={72}
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
          />
          <div className="mt-2 text-sm text-gray-600">Excavator #1</div>
        </div>
        <div className="text-center">
          <Progress
            type="circle"
            percent={95}
            strokeColor={{
              "0%": "#87d068",
              "100%": "#52c41a",
            }}
          />
          <div className="mt-2 text-sm text-gray-600">Haul Truck #3</div>
        </div>
        <div className="text-center">
          <Progress
            type="circle"
            percent={48}
            strokeColor={{
              "0%": "#ffa940",
              "100%": "#ff4d4f",
            }}
          />
          <div className="mt-2 text-sm text-gray-600">Drill Rig #2</div>
        </div>
      </div>
    ),
  },
  {
    title: "Dashboard Gauge",
    description: "Semi-circular dashboard gauge for speedometer-like display",
    code: `import { Progress } from 'antd';

<div className="flex gap-8 justify-center flex-wrap">
  <div className="text-center">
    <Progress type="dashboard" percent={75} />
    <div className="mt-2 text-sm text-gray-600">Speed (km/h)</div>
  </div>
  <div className="text-center">
    <Progress
      type="dashboard"
      percent={60}
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
    />
    <div className="mt-2 text-sm text-gray-600">Load Capacity</div>
  </div>
  <div className="text-center">
    <Progress
      type="dashboard"
      percent={92}
      strokeColor="#52c41a"
    />
    <div className="mt-2 text-sm text-gray-600">Efficiency Score</div>
  </div>
</div>`,
    component: (
      <div className="flex gap-8 justify-center flex-wrap">
        <div className="text-center">
          <Progress type="dashboard" percent={75} />
          <div className="mt-2 text-sm text-gray-600">Speed (km/h)</div>
        </div>
        <div className="text-center">
          <Progress
            type="dashboard"
            percent={60}
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
          />
          <div className="mt-2 text-sm text-gray-600">Load Capacity</div>
        </div>
        <div className="text-center">
          <Progress type="dashboard" percent={92} strokeColor="#52c41a" />
          <div className="mt-2 text-sm text-gray-600">Efficiency Score</div>
        </div>
      </div>
    ),
  },
];
