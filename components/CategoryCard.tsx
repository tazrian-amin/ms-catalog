"use client";

import React from "react";
import Link from "next/link";
import { ComponentCategory } from "@/lib/types";
import * as MuiIcons from "@mui/icons-material";

interface CategoryCardProps {
  category: ComponentCategory;
}

export function CategoryCard({ category }: CategoryCardProps) {
  // Dynamically get the icon component
  const IconComponent = category.icon
    ? (MuiIcons as Record<string, React.ComponentType<{ sx?: object }>>)[
        category.icon
      ]
    : null;

  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 mb-2">
        {IconComponent && (
          <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center">
            <IconComponent sx={{ fontSize: 20, color: "#ffc500" }} />
          </div>
        )}
        <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
      </div>
      <p className="text-gray-600 mb-4">{category.description}</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {category.components.map((component) => (
          <Link
            key={component.id}
            href={`/components/${component.id}`}
            className="block p-3 border border-gray-200 rounded hover:border-[#ffc500] hover:bg-[#fffbf0] transition-all duration-200 group hover:shadow-sm"
          >
            <div className="flex items-start justify-between">
              <span className="text-sm font-medium text-gray-900 group-hover:text-[#e6b000]">
                {component.name}
              </span>
              {component.status === "beta" && (
                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">
                  Beta
                </span>
              )}
              {component.status === "experimental" && (
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">
                  Exp
                </span>
              )}
            </div>
            <div className="mt-1">
              <span className="text-xs text-gray-500">
                {component.library === "mui"
                  ? "MUI"
                  : component.library === "antd"
                  ? "Ant Design"
                  : "Recharts"}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
