# MS Component Library

A comprehensive component catalog for Mining Sentry applications, built with Next.js, React, Material-UI, and Ant Design.

## 🚀 Features

- **Component Catalog**: Browse through organized categories of UI components
- **Interactive Examples**: Live component demonstrations with editable code snippets
- **Dual Library Support**: Leverage both Material-UI and Ant Design components
- **Type-Safe**: Full TypeScript support for better developer experience
- **Modern Stack**: Built with Next.js 16 and React 19
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🏗️ Project Structure

```
ms-catalog-library/
├── app/
│   ├── layout.tsx                 # Root layout with header
│   ├── page.tsx                   # Home page with component overview
│   ├── about/                     # About page
│   └── components/
│       └── [componentId]/         # Dynamic component detail pages
│           └── page.tsx
├── components/
│   ├── Header.tsx                 # Main navigation header
│   ├── CategoryCard.tsx           # Component category display
│   ├── CodeBlock.tsx              # Code snippet display with copy
│   └── ExampleSection.tsx         # Component example wrapper
├── lib/
│   ├── types.ts                   # TypeScript type definitions
│   ├── catalog-data.ts            # Component catalog data structure
│   └── component-examples/        # Component example implementations
│       ├── index.tsx              # Central exports
│       ├── inputs/                # Input component examples
│       │   ├── button.tsx
│       │   ├── text-field.tsx
│       │   ├── select.tsx
│       │   ├── checkbox.tsx
│       │   └── slider.tsx
│       ├── data-display/          # Data display examples
│       │   ├── card.tsx
│       │   └── table.tsx
│       ├── feedback/              # Feedback component examples
│       │   └── alert.tsx
│       ├── navigation/            # Navigation examples
│       │   └── tabs.tsx
│       ├── widgets/               # Widget examples
│       │   ├── circular-gauge.tsx
│       │   ├── linear-gauge.tsx
│       │   ├── statistic.tsx
│       │   └── dashboard-gauge.tsx
│       └── charts/                # Chart examples
│           ├── line-chart.tsx
│           ├── bar-chart.tsx
│           ├── area-chart.tsx
│           ├── pie-chart.tsx
│           └── composed-chart.tsx
└── public/                        # Static assets
```

## 📚 Component Categories

### Inputs
- Button (MUI)
- Text Field (MUI)
- Select (Ant Design)
- Checkbox (MUI)
- Radio (Ant Design)
- Switch (MUI)

### Data Display
- Table (Ant Design)
- Card (MUI)
- List (MUI)
- Avatar (Ant Design)
- Badge (MUI)
- Chip (MUI)

### Feedback
- Alert (MUI)
- Dialog (MUI)
- Notification (Ant Design)
- Progress (MUI)
- Skeleton (Ant Design)

### Navigation
- Menu (Ant Design)
- Tabs (MUI)
- Breadcrumbs (MUI)
- Drawer (Ant Design)
- Pagination (MUI)

### Layout
- Grid (MUI)
- Container (MUI)
- Divider (Ant Design)
- Space (Ant Design)

### Widgets
- Circular Gauge (MUI)
- Linear Gauge (Ant Design)
- Statistic (Ant Design)
- Dashboard Gauge (Ant Design)

### Charts
- Line Chart (Recharts)
- Bar Chart (Recharts)
- Area Chart (Recharts)
- Pie Chart (Recharts)
- Composed Chart (Recharts)

## 🎨 Adding New Components

### 1. Add Component to Catalog Data

Edit `lib/catalog-data.ts`:

```typescript
{
  id: 'your-component',
  name: 'Your Component',
  description: 'Component description',
  library: 'mui', // or 'antd'
  status: 'stable', // or 'beta', 'experimental'
}
```

### 2. Create Component Examples

Create a new file `lib/component-examples/your-component.tsx`:

```typescript
'use client';

import React from 'react';
import { ComponentExample } from '../types';

export const yourComponentExamples: ComponentExample[] = [
  {
    title: 'Basic Example',
    description: 'Description of the example',
    code: `// Your code here`,
    component: <YourComponent />,
  },
];
```

### 3. Register Examples

Add to `lib/component-examples/index.tsx`:

```typescript
import { yourComponentExamples } from './your-component';

const examplesMap: Record<string, ComponentExample[]> = {
  // ... existing components
  'your-component': yourComponentExamples,
};
```

## 🛠️ Technologies

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Component Libraries**:
  - Material-UI (MUI) v7
  - Ant Design v6
- **Charts**: Recharts v2
- **Icons**: Material Icons, Ant Design Icons

## 📖 Usage

1. **Browse Components**: Visit the home page to see all available components organized by category
2. **View Examples**: Click on any component to see interactive examples
3. **Copy Code**: Use the code snippets provided with each example
4. **Integrate**: Copy the installation command and code into your Mining Sentry projects

## 🎯 Development Guidelines

- All components should be documented with at least one example
- Use TypeScript for type safety
- Follow the existing code structure and naming conventions
- Include interactive examples where possible
- Provide clear code snippets for each example

## 📝 License

Proprietary - Mining Sentry

## 🤝 Contributing

This is an internal Mining Sentry project. For contributions, please contact the development team.

---

**Built with ❤️ for Mining Sentry**
