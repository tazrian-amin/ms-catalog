export interface Component {
  id: string;
  name: string;
  description: string;
  library: "mui" | "antd" | "recharts" | "custom";
  status?: "stable" | "beta" | "experimental";
}

export interface ComponentCategory {
  id: string;
  name: string;
  description: string;
  icon?: string;
  components: Component[];
}

export interface ComponentExample {
  title: string;
  description?: string;
  code: string;
  component: React.ReactNode;
}
