"use client";

import React from "react";
import { Statistic, Row, Col, Card } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { ComponentExample } from "../../types";

export const statisticExamples: ComponentExample[] = [
  {
    title: "Basic Statistics",
    description: "Display numerical data with labels",
    code: `import { Statistic, Row, Col } from 'antd';

<Row gutter={16}>
  <Col span={12}>
    <Statistic title="Active Equipment" value={24} />
  </Col>
  <Col span={12}>
    <Statistic title="Daily Production" value={1250} suffix="tons" />
  </Col>
</Row>`,
    component: (
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Active Equipment" value={24} />
        </Col>
        <Col span={12}>
          <Statistic title="Daily Production" value={1250} suffix="tons" />
        </Col>
      </Row>
    ),
  },
  {
    title: "Statistics with Trends",
    description: "Show trends with colored indicators",
    code: `import { Statistic, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

<Row gutter={16}>
  <Col span={12}>
    <Statistic
      title="Efficiency"
      value={11.28}
      precision={2}
      styles={{ content: { color: '#3f8600' } }}
      prefix={<ArrowUpOutlined />}
      suffix="%"
    />
  </Col>
  <Col span={12}>
    <Statistic
      title="Downtime"
      value={9.3}
      precision={2}
      styles={{ content: { color: '#cf1322' } }}
      prefix={<ArrowDownOutlined />}
      suffix="%"
    />
  </Col>
</Row>`,
    component: (
      <Row gutter={16}>
        <Col span={12}>
          <Statistic
            title="Efficiency"
            value={11.28}
            precision={2}
            styles={{ content: { color: "#3f8600" } }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Downtime"
            value={9.3}
            precision={2}
            styles={{ content: { color: "#cf1322" } }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Col>
      </Row>
    ),
  },
  {
    title: "Dashboard Statistics Cards",
    description: "Statistics displayed in card format for dashboards",
    code: `import { Statistic, Row, Col, Card } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

<Row gutter={16}>
  <Col span={8}>
    <Card>
      <Statistic
        title="Total Ore Mined"
        value={25847}
        suffix="tons"
        styles={{ content: { color: '#1890ff' } }}
      />
    </Card>
  </Col>
  <Col span={8}>
    <Card>
      <Statistic
        title="Equipment Utilization"
        value={87.5}
        suffix="%"
        prefix={<ArrowUpOutlined />}
        styles={{ content: { color: '#3f8600' } }}
      />
    </Card>
  </Col>
  <Col span={8}>
    <Card>
      <Statistic
        title="Safety Score"
        value={98.2}
        precision={1}
        suffix="/100"
        styles={{ content: { color: '#52c41a' } }}
      />
    </Card>
  </Col>
</Row>`,
    component: (
      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Ore Mined"
              value={25847}
              suffix="tons"
              styles={{ content: { color: "#1890ff" } }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Equipment Utilization"
              value={87.5}
              suffix="%"
              prefix={<ArrowUpOutlined />}
              styles={{ content: { color: "#3f8600" } }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Safety Score"
              value={98.2}
              precision={1}
              suffix="/100"
              styles={{ content: { color: "#52c41a" } }}
            />
          </Card>
        </Col>
      </Row>
    ),
  },
];
