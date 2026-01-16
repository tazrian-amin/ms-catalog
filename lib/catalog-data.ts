import { Component, ComponentCategory } from "./types";

// MS Component Catalog Data Structure
export const catalogData: ComponentCategory[] = [
  {
    id: "custom-widgets",
    name: "Custom Widgets",
    description: "Industry-specific custom widgets for specialized use cases",
    icon: "Build",
    components: [
      {
        id: "basic-storage-bin",
        name: "Basic Storage Bin",
        description: "Simple rectangular storage bin for inventory tracking",
        library: "custom",
        status: "stable",
      },
      {
        id: "basic-trapezoid-bin",
        name: "Basic Trapezoid Bin",
        description: "Simple trapezoid bin for mining operations",
        library: "custom",
        status: "stable",
      },
      {
        id: "basic-bin-hopper",
        name: "Basic Bin Hopper",
        description: "Inverted trapezoid hopper with flow indicators",
        library: "custom",
        status: "stable",
      },
      {
        id: "industrial-bin-hopper",
        name: "Industrial Bin Hopper",
        description: "Complex multi-section hopper with industrial design",
        library: "custom",
        status: "stable",
      },
    ],
  },
  {
    id: "widgets",
    name: "Widgets",
    description: "Data visualization widgets and gauges for monitoring",
    icon: "Widgets",
    components: [
      {
        id: "circular-gauge",
        name: "Circular Gauge",
        description: "Circular progress gauge for metrics",
        library: "mui",
        status: "stable",
      },
      {
        id: "linear-gauge",
        name: "Linear Gauge",
        description: "Linear progress gauge for measurements",
        library: "antd",
        status: "stable",
      },
      {
        id: "statistic",
        name: "Statistic",
        description: "Display statistical data with formatting",
        library: "antd",
        status: "stable",
      },
      {
        id: "dashboard-gauge",
        name: "Dashboard Gauge",
        description: "Speedometer-style gauge for KPIs",
        library: "antd",
        status: "stable",
      },
    ],
  },
  {
    id: "charts",
    name: "Charts",
    description: "Data visualization charts for analytics and reporting",
    icon: "BarChart",
    components: [
      {
        id: "line-chart",
        name: "Line Chart",
        description: "Display trends and time-series data",
        library: "recharts",
        status: "stable",
      },
      {
        id: "bar-chart",
        name: "Bar Chart",
        description: "Compare values across categories",
        library: "recharts",
        status: "stable",
      },
      {
        id: "area-chart",
        name: "Area Chart",
        description: "Show cumulative trends over time",
        library: "recharts",
        status: "stable",
      },
      {
        id: "pie-chart",
        name: "Pie Chart",
        description: "Display proportional data distribution",
        library: "recharts",
        status: "stable",
      },
      {
        id: "composed-chart",
        name: "Composed Chart",
        description: "Combine multiple chart types",
        library: "recharts",
        status: "stable",
      },
    ],
  },
  {
    id: "inputs",
    name: "Inputs",
    description: "Form controls and input components for user interaction",
    icon: "Input",
    components: [
      {
        id: "button",
        name: "Button",
        description: "Trigger actions and events with customizable buttons",
        library: "mui",
        status: "stable",
      },
      {
        id: "text-field",
        name: "Text Field",
        description: "Input field for text entry",
        library: "mui",
        status: "stable",
      },
      {
        id: "select",
        name: "Select",
        description: "Dropdown selection component",
        library: "antd",
        status: "stable",
      },
      {
        id: "checkbox",
        name: "Checkbox",
        description: "Checkbox for boolean selections",
        library: "mui",
        status: "stable",
      },
      {
        id: "radio",
        name: "Radio",
        description: "Radio button for single selection from multiple options",
        library: "antd",
        status: "stable",
      },
      {
        id: "switch",
        name: "Switch",
        description: "Toggle switch for binary states",
        library: "mui",
        status: "stable",
      },
      {
        id: "slider",
        name: "Slider",
        description: "Select values from a range",
        library: "mui",
        status: "stable",
      },
    ],
  },
  {
    id: "data-display",
    name: "Data Display",
    description: "Components for displaying and organizing data",
    icon: "TableChart",
    components: [
      {
        id: "table",
        name: "Table",
        description: "Display data in rows and columns",
        library: "antd",
        status: "stable",
      },
      {
        id: "card",
        name: "Card",
        description: "Container for content and actions",
        library: "mui",
        status: "stable",
      },
      {
        id: "list",
        name: "List",
        description: "Display a list of items",
        library: "mui",
        status: "stable",
      },
      {
        id: "avatar",
        name: "Avatar",
        description: "Display user profile images",
        library: "antd",
        status: "stable",
      },
      {
        id: "badge",
        name: "Badge",
        description: "Small count and labeling component",
        library: "mui",
        status: "stable",
      },
      {
        id: "chip",
        name: "Chip",
        description: "Compact elements for tags and categories",
        library: "mui",
        status: "stable",
      },
    ],
  },
  {
    id: "feedback",
    name: "Feedback",
    description: "Provide feedback to users about their actions",
    icon: "Feedback",
    components: [
      {
        id: "alert",
        name: "Alert",
        description: "Display important messages and notifications",
        library: "mui",
        status: "stable",
      },
      {
        id: "dialog",
        name: "Dialog",
        description: "Modal dialog for user interaction",
        library: "mui",
        status: "stable",
      },
      {
        id: "notification",
        name: "Notification",
        description: "Display notification messages",
        library: "antd",
        status: "stable",
      },
      {
        id: "progress",
        name: "Progress",
        description: "Show progress of operations",
        library: "mui",
        status: "stable",
      },
      {
        id: "skeleton",
        name: "Skeleton",
        description: "Loading placeholder component",
        library: "antd",
        status: "stable",
      },
    ],
  },
  {
    id: "navigation",
    name: "Navigation",
    description: "Navigate through different sections of the application",
    icon: "Navigation",
    components: [
      {
        id: "menu",
        name: "Menu",
        description: "Navigation menu for hierarchical content",
        library: "antd",
        status: "stable",
      },
      {
        id: "tabs",
        name: "Tabs",
        description: "Organize content into separate views",
        library: "mui",
        status: "stable",
      },
      {
        id: "breadcrumbs",
        name: "Breadcrumbs",
        description: "Show navigation hierarchy",
        library: "mui",
        status: "stable",
      },
      {
        id: "drawer",
        name: "Drawer",
        description: "Side panel navigation",
        library: "antd",
        status: "stable",
      },
      {
        id: "pagination",
        name: "Pagination",
        description: "Navigate through paginated content",
        library: "mui",
        status: "stable",
      },
    ],
  },
  {
    id: "layout",
    name: "Layout",
    description: "Structure and organize page layouts",
    icon: "GridView",
    components: [
      {
        id: "grid",
        name: "Grid",
        description: "Responsive grid layout system",
        library: "mui",
        status: "stable",
      },
      {
        id: "container",
        name: "Container",
        description: "Center and constrain content",
        library: "mui",
        status: "stable",
      },
      {
        id: "divider",
        name: "Divider",
        description: "Separate content sections",
        library: "antd",
        status: "stable",
      },
      {
        id: "space",
        name: "Space",
        description: "Set consistent spacing between components",
        library: "antd",
        status: "stable",
      },
    ],
  },
];

// Helper function to get component by ID
export function getComponentById(
  componentId: string
): { component: Component; category: ComponentCategory } | null {
  for (const category of catalogData) {
    const component = category.components.find((c) => c.id === componentId);
    if (component) {
      return { component, category };
    }
  }
  return null;
}

// Helper function to get all components
export function getAllComponents() {
  return catalogData.flatMap((category) =>
    category.components.map((component) => ({
      ...component,
      categoryId: category.id,
      categoryName: category.name,
    }))
  );
}
