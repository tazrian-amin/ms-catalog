"use client";

import { ComponentExample } from "@/lib/types";
import { ExampleSection } from "./ExampleSection";
import { getComponentExamples } from "@/lib/component-examples";

interface ComponentExamplesProps {
  componentId: string;
}

export function ComponentExamples({ componentId }: ComponentExamplesProps) {
  const examples = getComponentExamples(componentId);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Examples</h2>
      {examples.length > 0 ? (
        examples.map((example: ComponentExample, index: number) => (
          <ExampleSection key={index} example={example} />
        ))
      ) : (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <p className="text-yellow-800">
            Examples for this component are coming soon. Stay tuned!
          </p>
        </div>
      )}
    </div>
  );
}
