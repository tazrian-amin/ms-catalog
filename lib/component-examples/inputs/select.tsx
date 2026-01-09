"use client";

import React from "react";
import { Select } from "antd";
import { ComponentExample } from "../../types";

const { Option } = Select;

export const selectExamples: ComponentExample[] = [
  {
    title: "Basic Select",
    description: "Simple dropdown selection",
    code: `import { Select } from 'antd';

const { Option } = Select;

<Select
  placeholder="Select a fruit"
  style={{ width: 200 }}
>
  <Option value="apple">Apple</Option>
  <Option value="banana">Banana</Option>
  <Option value="orange">Orange</Option>
  <Option value="grape">Grape</Option>
</Select>`,
    component: (
      <Select placeholder="Select a fruit" style={{ width: 200 }}>
        <Option value="apple">Apple</Option>
        <Option value="banana">Banana</Option>
        <Option value="orange">Orange</Option>
        <Option value="grape">Grape</Option>
      </Select>
    ),
  },
  {
    title: "Select with Search",
    description: "Select component with search functionality",
    code: `import { Select } from 'antd';

<Select
  showSearch
  placeholder="Search to select"
  style={{ width: 200 }}
  filterOption={(input, option) =>
    (option?.children ?? '').toLowerCase().includes(input.toLowerCase())
  }
>
  <Option value="australia">Australia</Option>
  <Option value="canada">Canada</Option>
  <Option value="france">France</Option>
  <Option value="germany">Germany</Option>
  <Option value="japan">Japan</Option>
  <Option value="usa">United States</Option>
</Select>`,
    component: (
      <Select
        showSearch
        placeholder="Search to select"
        style={{ width: 200 }}
        filterOption={(input, option) =>
          (option as { children?: string })?.children
            ?.toLowerCase()
            .includes(input.toLowerCase()) ?? false
        }
      >
        <Option value="australia">Australia</Option>
        <Option value="canada">Canada</Option>
        <Option value="france">France</Option>
        <Option value="germany">Germany</Option>
        <Option value="japan">Japan</Option>
        <Option value="usa">United States</Option>
      </Select>
    ),
  },
  {
    title: "Multiple Selection",
    description: "Select multiple items from dropdown",
    code: `import { Select } from 'antd';

<Select
  mode="multiple"
  placeholder="Select technologies"
  style={{ width: '100%' }}
>
  <Option value="react">React</Option>
  <Option value="vue">Vue</Option>
  <Option value="angular">Angular</Option>
  <Option value="svelte">Svelte</Option>
  <Option value="nextjs">Next.js</Option>
</Select>`,
    component: (
      <div className="max-w-md">
        <Select
          mode="multiple"
          placeholder="Select technologies"
          style={{ width: "100%" }}
        >
          <Option value="react">React</Option>
          <Option value="vue">Vue</Option>
          <Option value="angular">Angular</Option>
          <Option value="svelte">Svelte</Option>
          <Option value="nextjs">Next.js</Option>
        </Select>
      </div>
    ),
  },
];
