"use client";

import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { ComponentExample } from "../../types";

interface DataType {
  key: string;
  name: string;
  status: string;
  location: string;
  uptime: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Equipment",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => (
      <span
        className={`px-2 py-1 rounded text-xs font-medium ${
          status === "Active"
            ? "bg-green-100 text-green-800"
            : "bg-red-100 text-red-800"
        }`}
      >
        {status}
      </span>
    ),
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
  },
  {
    title: "Uptime",
    dataIndex: "uptime",
    key: "uptime",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "Excavator #1",
    status: "Active",
    location: "Site A",
    uptime: "99.5%",
  },
  {
    key: "2",
    name: "Haul Truck #3",
    status: "Active",
    location: "Site B",
    uptime: "98.2%",
  },
  {
    key: "3",
    name: "Drill Rig #2",
    status: "Maintenance",
    location: "Site A",
    uptime: "95.7%",
  },
  {
    key: "4",
    name: "Loader #4",
    status: "Active",
    location: "Site C",
    uptime: "99.8%",
  },
];

export const tableExamples: ComponentExample[] = [
  {
    title: "Basic Table",
    description: "Display data in a structured table format",
    code: `import { Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
  key: string;
  name: string;
  status: string;
  location: string;
  uptime: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Equipment',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
  {
    title: 'Uptime',
    dataIndex: 'uptime',
    key: 'uptime',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Excavator #1',
    status: 'Active',
    location: 'Site A',
    uptime: '99.5%',
  },
  // ... more data
];

<Table columns={columns} dataSource={data} />`,
    component: <Table columns={columns} dataSource={data} pagination={false} />,
  },
];
