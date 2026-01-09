"use client";

import React from "react";
import { Progress } from "antd";
import { ComponentExample } from "../../types";

export const linearGaugeExamples: ComponentExample[] = [
  {
    title: "Basic Linear Gauge",
    description: "Simple linear progress gauges with different styles",
    code: `import { Progress } from 'antd';

<div className="flex flex-col gap-4 max-w-md">
  <div>
    <div className="mb-2 text-sm text-gray-600">Production Target</div>
    <Progress percent={75} />
  </div>
  <div>
    <div className="mb-2 text-sm text-gray-600">Fuel Level</div>
    <Progress percent={30} status="exception" />
  </div>
  <div>
    <div className="mb-2 text-sm text-gray-600">Equipment Health</div>
    <Progress percent={100} status="success" />
  </div>
</div>`,
    component: (
      <div className="flex flex-col gap-4 max-w-md w-full">
        <div>
          <div className="mb-2 text-sm text-gray-600">Production Target</div>
          <Progress percent={75} />
        </div>
        <div>
          <div className="mb-2 text-sm text-gray-600">Fuel Level</div>
          <Progress percent={30} status="exception" />
        </div>
        <div>
          <div className="mb-2 text-sm text-gray-600">Equipment Health</div>
          <Progress percent={100} status="success" />
        </div>
      </div>
    ),
  },
  {
    title: "Gradient Progress Gauges",
    description: "Linear gauges with gradient colors",
    code: `import { Progress } from 'antd';

<div className="flex flex-col gap-4 max-w-md">
  <div>
    <div className="mb-2 text-sm text-gray-600">Excavation Progress</div>
    <Progress
      percent={85}
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
    />
  </div>
  <div>
    <div className="mb-2 text-sm text-gray-600">Load Capacity</div>
    <Progress
      percent={60}
      strokeColor={{
        from: '#108ee9',
        to: '#87d068',
      }}
    />
  </div>
</div>`,
    component: (
      <div className="flex flex-col gap-4 max-w-md w-full">
        <div>
          <div className="mb-2 text-sm text-gray-600">Excavation Progress</div>
          <Progress
            percent={85}
            strokeColor={{
              "0%": "#108ee9",
              "100%": "#87d068",
            }}
          />
        </div>
        <div>
          <div className="mb-2 text-sm text-gray-600">Load Capacity</div>
          <Progress
            percent={60}
            strokeColor={{
              from: "#108ee9",
              to: "#87d068",
            }}
          />
        </div>
      </div>
    ),
  },
  {
    title: "Stepped Progress",
    description: "Progress gauge with step indicators",
    code: `import { Progress } from 'antd';

<div className="flex flex-col gap-4 max-w-md">
  <div>
    <div className="mb-2 text-sm text-gray-600">Shift Progress (8 hours)</div>
    <Progress percent={75} steps={8} />
  </div>
  <div>
    <div className="mb-2 text-sm text-gray-600">Maintenance Checklist</div>
    <Progress percent={90} steps={10} strokeColor="#52c41a" />
  </div>
</div>`,
    component: (
      <div className="flex flex-col gap-4 max-w-md w-full">
        <div>
          <div className="mb-2 text-sm text-gray-600">
            Shift Progress (8 hours)
          </div>
          <Progress percent={75} steps={8} />
        </div>
        <div>
          <div className="mb-2 text-sm text-gray-600">
            Maintenance Checklist
          </div>
          <Progress percent={90} steps={10} strokeColor="#52c41a" />
        </div>
      </div>
    ),
  },
];
