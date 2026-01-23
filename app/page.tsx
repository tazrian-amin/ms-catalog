import { catalogData } from "@/lib/catalog-data";
import { CategoryCard } from "@/components/CategoryCard";
import { ComponentSearchWrapper } from "@/components/ComponentSearchWrapper";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          <span className="text-gray-900">MINING </span>
          <span className="text-[#ffc500]">SENTRY </span>
          Catalog
        </h1>
        <div className="mt-6 flex justify-center gap-4">
          <div className="bg-blue-50 px-4 py-2 rounded-lg">
            <span className="text-sm text-gray-600">Total Components:</span>
            <span className="ml-2 text-lg font-bold text-blue-600">
              {catalogData.reduce((acc, cat) => acc + cat.components.length, 0)}
            </span>
          </div>
          <div className="bg-green-50 px-4 py-2 rounded-lg">
            <span className="text-sm text-gray-600">Categories:</span>
            <span className="ml-2 text-lg font-bold text-green-600">
              {catalogData.length}
            </span>
          </div>
        </div>
      </div>

      {/* Component Search */}
      <ComponentSearchWrapper />

      {/* Component Categories */}
      <div className="space-y-8">
        {catalogData.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
