export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          About MS Component Library
        </h1>

        <div className="prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Overview
            </h2>
            <p className="text-gray-600 leading-relaxed">
              The Mining Sentry Component Library is a comprehensive collection
              of reusable UI components built specifically for mining industry
              applications. By leveraging the power of Material-UI, Ant Design,
              and Recharts, we provide a robust foundation for building modern,
              accessible, and user-friendly interfaces.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why MS Component Library?
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>
                <strong>Industry-Focused:</strong> Components designed with
                mining operations in mind
              </li>
              <li>
                <strong>Best-in-Class Libraries:</strong> Built on Material-UI, Ant Design, 
                and Recharts
              </li>
              <li>
                <strong>Interactive Documentation:</strong> Live examples and
                code snippets
              </li>
              <li>
                <strong>Type-Safe:</strong> Full TypeScript support for better
                developer experience
              </li>
              <li>
                <strong>Responsive:</strong> Mobile-first design that works on
                all devices
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <div className="font-semibold text-blue-900">React 19</div>
                <div className="text-sm text-blue-700">UI Framework</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <div className="font-semibold text-purple-900">Next.js 16</div>
                <div className="text-sm text-purple-700">App Framework</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <div className="font-semibold text-green-900">TypeScript</div>
                <div className="text-sm text-green-700">Type Safety</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <div className="font-semibold text-orange-900">
                  Tailwind CSS
                </div>
                <div className="text-sm text-orange-700">Styling</div>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg text-center">
                <div className="font-semibold text-cyan-900">Material-UI</div>
                <div className="text-sm text-cyan-700">Components</div>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center">
                <div className="font-semibold text-red-900">Ant Design</div>
                <div className="text-sm text-red-700">Components</div>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg text-center">
                <div className="font-semibold text-yellow-900">Recharts</div>
                <div className="text-sm text-yellow-700">Charts</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
