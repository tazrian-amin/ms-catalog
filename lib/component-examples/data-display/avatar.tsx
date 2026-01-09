"use client";

import React from "react";
import { Avatar, Badge, Space, Tooltip } from "antd";
import {
  UserOutlined,
  AntDesignOutlined,
  SettingOutlined,
  TeamOutlined,
  RobotOutlined,
  ToolOutlined,
  SafetyOutlined,
  ExperimentOutlined,
} from "@ant-design/icons";
import { ComponentExample } from "../../types";

export const avatarExamples: ComponentExample[] = [
  {
    title: "Basic Avatar",
    description: "Simple avatar with image",
    code: `import { Avatar } from 'antd';

<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" size={64} />`,
    component: (
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" size={64} />
    ),
  },
  {
    title: "Avatar with Text",
    description: "Avatar displaying user initials",
    code: `import { Avatar, Space } from 'antd';

<Space>
  <Avatar style={{ backgroundColor: '#f56a00' }}>JD</Avatar>
  <Avatar style={{ backgroundColor: '#87d068' }}>MS</Avatar>
  <Avatar style={{ backgroundColor: '#1890ff' }}>TK</Avatar>
  <Avatar style={{ backgroundColor: '#722ed1' }}>AL</Avatar>
</Space>`,
    component: (
      <Space>
        <Avatar style={{ backgroundColor: "#f56a00" }}>JD</Avatar>
        <Avatar style={{ backgroundColor: "#87d068" }}>MS</Avatar>
        <Avatar style={{ backgroundColor: "#1890ff" }}>TK</Avatar>
        <Avatar style={{ backgroundColor: "#722ed1" }}>AL</Avatar>
      </Space>
    ),
  },
  {
    title: "Avatar with Icon",
    description: "Avatar displaying icons for different roles",
    code: `import { Avatar, Space } from 'antd';
import { UserOutlined, SettingOutlined, TeamOutlined, ToolOutlined } from '@ant-design/icons';

<Space>
  <Avatar icon={<UserOutlined />} />
  <Avatar icon={<SettingOutlined />} style={{ backgroundColor: '#87d068' }} />
  <Avatar icon={<TeamOutlined />} style={{ backgroundColor: '#1890ff' }} />
  <Avatar icon={<ToolOutlined />} style={{ backgroundColor: '#f56a00' }} />
</Space>`,
    component: (
      <Space>
        <Avatar icon={<UserOutlined />} />
        <Avatar
          icon={<SettingOutlined />}
          style={{ backgroundColor: "#87d068" }}
        />
        <Avatar
          icon={<TeamOutlined />}
          style={{ backgroundColor: "#1890ff" }}
        />
        <Avatar
          icon={<ToolOutlined />}
          style={{ backgroundColor: "#f56a00" }}
        />
      </Space>
    ),
  },
  {
    title: "Avatar Sizes",
    description: "Avatars in different sizes",
    code: `import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

<Space>
  <Avatar size={24} icon={<UserOutlined />} />
  <Avatar size={32} icon={<UserOutlined />} />
  <Avatar size={40} icon={<UserOutlined />} />
  <Avatar size={48} icon={<UserOutlined />} />
  <Avatar size={64} icon={<UserOutlined />} />
  <Avatar size={80} icon={<UserOutlined />} />
</Space>`,
    component: (
      <Space>
        <Avatar size={24} icon={<UserOutlined />} />
        <Avatar size={32} icon={<UserOutlined />} />
        <Avatar size={40} icon={<UserOutlined />} />
        <Avatar size={48} icon={<UserOutlined />} />
        <Avatar size={64} icon={<UserOutlined />} />
        <Avatar size={80} icon={<UserOutlined />} />
      </Space>
    ),
  },
  {
    title: "Avatar Shapes",
    description: "Circle and square avatar shapes",
    code: `import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

<Space size={16}>
  <Avatar shape="circle" icon={<UserOutlined />} size={48} />
  <Avatar shape="square" icon={<UserOutlined />} size={48} />
  <Avatar shape="circle" src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" size={48} />
  <Avatar shape="square" src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" size={48} />
</Space>`,
    component: (
      <Space size={16}>
        <Avatar shape="circle" icon={<UserOutlined />} size={48} />
        <Avatar shape="square" icon={<UserOutlined />} size={48} />
        <Avatar
          shape="circle"
          src="https://api.dicebear.com/7.x/miniavs/svg?seed=2"
          size={48}
        />
        <Avatar
          shape="square"
          src="https://api.dicebear.com/7.x/miniavs/svg?seed=3"
          size={48}
        />
      </Space>
    ),
  },
  {
    title: "Avatar Group",
    description: "Multiple avatars grouped together with max count",
    code: `import { Avatar, Space } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';

<Space orientation="vertical" size={16}>
  <Avatar.Group>
    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=4" />
    <Avatar style={{ backgroundColor: '#f56a00' }}>JD</Avatar>
    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
    <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
  </Avatar.Group>
  
  <Avatar.Group maxCount={3} maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=5" />
    <Avatar style={{ backgroundColor: '#f56a00' }}>MS</Avatar>
    <Avatar style={{ backgroundColor: '#87d068' }}>TK</Avatar>
    <Avatar style={{ backgroundColor: '#1890ff' }}>AL</Avatar>
    <Avatar style={{ backgroundColor: '#722ed1' }}>RB</Avatar>
  </Avatar.Group>
</Space>`,
    component: (
      <Space orientation="vertical" size={16}>
        <Avatar.Group>
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=4" />
          <Avatar style={{ backgroundColor: "#f56a00" }}>JD</Avatar>
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
          />
          <Avatar
            style={{ backgroundColor: "#1890ff" }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>

        <Avatar.Group
          maxCount={3}
          maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
        >
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=5" />
          <Avatar style={{ backgroundColor: "#f56a00" }}>MS</Avatar>
          <Avatar style={{ backgroundColor: "#87d068" }}>TK</Avatar>
          <Avatar style={{ backgroundColor: "#1890ff" }}>AL</Avatar>
          <Avatar style={{ backgroundColor: "#722ed1" }}>RB</Avatar>
        </Avatar.Group>
      </Space>
    ),
  },
  {
    title: "Avatar with Badge",
    description: "Avatar with notification badge",
    code: `import { Avatar, Badge, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

<Space size={24}>
  <Badge count={5}>
    <Avatar shape="square" icon={<UserOutlined />} />
  </Badge>
  <Badge dot>
    <Avatar shape="square" icon={<UserOutlined />} />
  </Badge>
  <Badge count={99} overflowCount={10}>
    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=6" />
  </Badge>
  <Badge status="success">
    <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=7" />
  </Badge>
</Space>`,
    component: (
      <Space size={24}>
        <Badge count={5}>
          <Avatar shape="square" icon={<UserOutlined />} />
        </Badge>
        <Badge dot>
          <Avatar shape="square" icon={<UserOutlined />} />
        </Badge>
        <Badge count={99} overflowCount={10}>
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=6" />
        </Badge>
        <Badge status="success">
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=7" />
        </Badge>
      </Space>
    ),
  },
  {
    title: "Mining Equipment Operators",
    description: "Team avatars with tooltips for mining operations",
    code: `import { Avatar, Space, Tooltip } from 'antd';
import { 
  RobotOutlined, 
  ToolOutlined, 
  SafetyOutlined, 
  ExperimentOutlined 
} from '@ant-design/icons';

<Space size={16}>
  <Tooltip title="John Doe - Excavator Operator">
    <Avatar 
      style={{ backgroundColor: '#f56a00' }} 
      icon={<ToolOutlined />} 
      size={48}
    />
  </Tooltip>
  <Tooltip title="Maria Santos - Safety Inspector">
    <Avatar 
      style={{ backgroundColor: '#87d068' }} 
      icon={<SafetyOutlined />} 
      size={48}
    />
  </Tooltip>
  <Tooltip title="Tom Kim - Equipment Engineer">
    <Avatar 
      style={{ backgroundColor: '#1890ff' }} 
      icon={<ExperimentOutlined />} 
      size={48}
    />
  </Tooltip>
  <Tooltip title="AI Monitoring System">
    <Avatar 
      style={{ backgroundColor: '#722ed1' }} 
      icon={<RobotOutlined />} 
      size={48}
    />
  </Tooltip>
</Space>`,
    component: (
      <Space size={16}>
        <Tooltip title="John Doe - Excavator Operator">
          <Avatar
            style={{ backgroundColor: "#f56a00" }}
            icon={<ToolOutlined />}
            size={48}
          />
        </Tooltip>
        <Tooltip title="Maria Santos - Safety Inspector">
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<SafetyOutlined />}
            size={48}
          />
        </Tooltip>
        <Tooltip title="Tom Kim - Equipment Engineer">
          <Avatar
            style={{ backgroundColor: "#1890ff" }}
            icon={<ExperimentOutlined />}
            size={48}
          />
        </Tooltip>
        <Tooltip title="AI Monitoring System">
          <Avatar
            style={{ backgroundColor: "#722ed1" }}
            icon={<RobotOutlined />}
            size={48}
          />
        </Tooltip>
      </Space>
    ),
  },
  {
    title: "Responsive Avatar",
    description: "Avatar with responsive sizes for different screen sizes",
    code: `import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

<Avatar 
  icon={<UserOutlined />}
  size={{ xs: 24, sm: 32, md: 40, lg: 48, xl: 64, xxl: 80 }}
/>`,
    component: (
      <Avatar
        icon={<UserOutlined />}
        size={{ xs: 24, sm: 32, md: 40, lg: 48, xl: 64, xxl: 80 }}
      />
    ),
  },
  {
    title: "Avatar with Fallback",
    description: "Avatar with fallback when image fails to load",
    code: `import { Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

<Space>
  <Avatar src="invalid-url.jpg">JD</Avatar>
  <Avatar src="invalid-url.jpg" icon={<UserOutlined />} />
  <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8">Fallback</Avatar>
</Space>`,
    component: (
      <Space>
        <Avatar src="invalid-url.jpg">JD</Avatar>
        <Avatar src="invalid-url.jpg" icon={<UserOutlined />} />
        <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8">
          Fallback
        </Avatar>
      </Space>
    ),
  },
];
