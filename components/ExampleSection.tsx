"use client";

import React, { useState } from "react";
import { ComponentExample } from "@/lib/types";
import { CodeBlock } from "./CodeBlock";

interface ExampleSectionProps {
  example: ComponentExample;
}

export function ExampleSection({ example }: ExampleSectionProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-white p-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{example.title}</h3>
        {example.description && (
          <p className="text-gray-600 text-sm mb-4">{example.description}</p>
        )}
        <div className="p-6 bg-gray-50 rounded border border-gray-200">
          {example.component}
        </div>
      </div>
      <div className="border-t border-gray-200">
        <button
          onClick={() => setShowCode(!showCode)}
          className="w-full px-6 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-between"
        >
          <span>
            {showCode ? "▼" : "▶"} {showCode ? "Hide" : "Show"} Code
          </span>
        </button>
        {showCode && (
          <div className="p-4 bg-gray-50">
            <CodeBlock code={example.code} />
          </div>
        )}
      </div>
    </div>
  );
}
