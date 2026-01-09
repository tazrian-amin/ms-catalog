"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Autocomplete, TextField } from "@mui/material";
import { catalogData } from "@/lib/catalog-data";
import { Component } from "@/lib/types";

interface ComponentOption extends Component {
  categoryName: string;
}

export function ComponentSearch() {
  const router = useRouter();

  // Flatten all components from all categories
  const allComponents: ComponentOption[] = catalogData.flatMap((category) =>
    category.components.map((component) => ({
      ...component,
      categoryName: category.name,
    }))
  );

  const handleComponentSelect = (
    _event: React.SyntheticEvent,
    value: ComponentOption | null
  ) => {
    if (value) {
      router.push(`/components/${value.id}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mb-12">
      <Autocomplete
        options={allComponents}
        getOptionLabel={(option) => option.name}
        groupBy={(option) => option.categoryName}
        onChange={handleComponentSelect}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for a component..."
            placeholder="Type to search (e.g., Button, Chart, Gauge)"
            variant="outlined"
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "#ffc500",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#ffc500",
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#ffc500",
              },
            }}
          />
        )}
        renderOption={(props, option) => {
          const { key, ...otherProps } =
            props as React.HTMLAttributes<HTMLLIElement> & { key: string };
          return (
            <li key={key} {...otherProps}>
              <div className="flex flex-col py-1">
                <span className="font-medium text-gray-900">{option.name}</span>
                <span className="text-xs text-gray-500">
                  {option.description}
                </span>
              </div>
            </li>
          );
        }}
        sx={{
          "& .MuiAutocomplete-groupLabel": {
            backgroundColor: "#f3f4f6",
            fontWeight: 600,
            color: "#374151",
          },
        }}
      />
    </div>
  );
}
