import { notFound } from "next/navigation";
import Link from "next/link";
import { getComponentById, getAllComponents } from "@/lib/catalog-data";
import { ComponentExamples } from "@/components/ComponentExamples";

interface PageProps {
  params: Promise<{ componentId: string }>;
}

// Generate static paths for all components
export async function generateStaticParams() {
  const components = getAllComponents();
  return components.map((component) => ({
    componentId: component.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { componentId } = await params;
  const result = getComponentById(componentId);

  if (!result) {
    return {
      title: "Component Not Found",
    };
  }

  return {
    title: `${result.component.name} - MS Component Library`,
    description: result.component.description,
  };
}

export default async function ComponentPage({ params }: PageProps) {
  const { componentId } = await params;
  const result = getComponentById(componentId);

  if (!result) {
    notFound();
  }

  const { component, category } = result;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <nav className="flex items-center space-x-2 text-sm">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Components
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">{category.name}</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-medium">{component.name}</span>
        </nav>
      </div>

      {/* Component Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {component.name}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              {component.description}
            </p>
            <div className="flex items-center space-x-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {component.library === "mui"
                  ? "Material-UI"
                  : component.library === "antd"
                  ? "Ant Design"
                  : component.library === "recharts"
                  ? "Recharts"
                  : "Custom"}
              </span>
              {component.status && component.status !== "stable" && (
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    component.status === "beta"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-purple-100 text-purple-800"
                  }`}
                >
                  {component.status.charAt(0).toUpperCase() +
                    component.status.slice(1)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Examples */}
      <ComponentExamples componentId={componentId} />
    </div>
  );
}
