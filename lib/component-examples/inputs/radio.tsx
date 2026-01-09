"use client";

import React from "react";
import { Radio, Space } from "antd";
import { ComponentExample } from "../../types";

export const radioExamples: ComponentExample[] = [
  {
    title: "Basic Radio Buttons",
    description: "Simple radio button controls",
    code: `import { Radio, Space } from 'antd';

<Space orientation="vertical">
  <Radio defaultChecked>Option A</Radio>
  <Radio>Option B</Radio>
  <Radio disabled>Disabled Option</Radio>
  <Radio defaultChecked disabled>Checked & Disabled</Radio>
</Space>`,
    component: (
      <Space orientation="vertical">
        <Radio defaultChecked>Option A</Radio>
        <Radio>Option B</Radio>
        <Radio disabled>Disabled Option</Radio>
        <Radio defaultChecked disabled>
          Checked & Disabled
        </Radio>
      </Space>
    ),
  },
  {
    title: "Radio Group - Vertical",
    description: "Group of radio buttons with vertical layout",
    code: `import { Radio, Space } from 'antd';

<Radio.Group defaultValue={1}>
  <Space orientation="vertical">
    <Radio value={1}>Surface Mining</Radio>
    <Radio value={2}>Underground Mining</Radio>
    <Radio value={3}>Placer Mining</Radio>
    <Radio value={4}>In-situ Mining</Radio>
  </Space>
</Radio.Group>`,
    component: (
      <Radio.Group defaultValue={1}>
        <Space orientation="vertical">
          <Radio value={1}>Surface Mining</Radio>
          <Radio value={2}>Underground Mining</Radio>
          <Radio value={3}>Placer Mining</Radio>
          <Radio value={4}>In-situ Mining</Radio>
        </Space>
      </Radio.Group>
    ),
  },
  {
    title: "Radio Group - Horizontal",
    description: "Radio buttons in a horizontal arrangement",
    code: `import { Radio } from 'antd';

<Radio.Group defaultValue="active">
  <Radio value="active">Active Equipment</Radio>
  <Radio value="maintenance">Under Maintenance</Radio>
  <Radio value="idle">Idle</Radio>
  <Radio value="offline">Offline</Radio>
</Radio.Group>`,
    component: (
      <Radio.Group defaultValue="active">
        <Radio value="active">Active Equipment</Radio>
        <Radio value="maintenance">Under Maintenance</Radio>
        <Radio value="idle">Idle</Radio>
        <Radio value="offline">Offline</Radio>
      </Radio.Group>
    ),
  },
  {
    title: "Radio Button Style",
    description: "Radio buttons styled as solid buttons",
    code: `import { Radio } from 'antd';

<Radio.Group defaultValue="day" buttonStyle="solid">
  <Radio.Button value="day">Day Shift</Radio.Button>
  <Radio.Button value="night">Night Shift</Radio.Button>
  <Radio.Button value="swing">Swing Shift</Radio.Button>
</Radio.Group>`,
    component: (
      <Radio.Group defaultValue="day" buttonStyle="solid">
        <Radio.Button value="day">Day Shift</Radio.Button>
        <Radio.Button value="night">Night Shift</Radio.Button>
        <Radio.Button value="swing">Swing Shift</Radio.Button>
      </Radio.Group>
    ),
  },
  {
    title: "Radio Button Sizes",
    description: "Radio buttons in different sizes",
    code: `import { Radio, Space } from 'antd';

<Space orientation="vertical" size="large">
  <Radio.Group defaultValue="medium" size="small">
    <Radio.Button value="small">Small</Radio.Button>
    <Radio.Button value="medium">Medium</Radio.Button>
    <Radio.Button value="large">Large</Radio.Button>
  </Radio.Group>
  
  <Radio.Group defaultValue="medium" size="middle">
    <Radio.Button value="small">Small</Radio.Button>
    <Radio.Button value="medium">Medium</Radio.Button>
    <Radio.Button value="large">Large</Radio.Button>
  </Radio.Group>
  
  <Radio.Group defaultValue="medium" size="large">
    <Radio.Button value="small">Small</Radio.Button>
    <Radio.Button value="medium">Medium</Radio.Button>
    <Radio.Button value="large">Large</Radio.Button>
  </Radio.Group>
</Space>`,
    component: (
      <Space orientation="vertical" size="large">
        <Radio.Group defaultValue="medium" size="small">
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="medium">Medium</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>

        <Radio.Group defaultValue="medium" size="middle">
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="medium">Medium</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>

        <Radio.Group defaultValue="medium" size="large">
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="medium">Medium</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Space>
    ),
  },
  {
    title: "Disabled Radio Group",
    description: "Radio group with disabled state",
    code: `import { Radio, Space } from 'antd';

<Radio.Group defaultValue={1} disabled>
  <Space orientation="vertical">
    <Radio value={1}>Excavator</Radio>
    <Radio value={2}>Haul Truck</Radio>
    <Radio value={3}>Drill Rig</Radio>
    <Radio value={4}>Loader</Radio>
  </Space>
</Radio.Group>`,
    component: (
      <Radio.Group defaultValue={1} disabled>
        <Space orientation="vertical">
          <Radio value={1}>Excavator</Radio>
          <Radio value={2}>Haul Truck</Radio>
          <Radio value={3}>Drill Rig</Radio>
          <Radio value={4}>Loader</Radio>
        </Space>
      </Radio.Group>
    ),
  },
];
