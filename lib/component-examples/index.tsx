import { ComponentExample } from "../types";

// Inputs
import { buttonExamples } from "./inputs/button";
import { textFieldExamples } from "./inputs/text-field";
import { selectExamples } from "./inputs/select";
import { checkboxExamples } from "./inputs/checkbox";
import { radioExamples } from "./inputs/radio";
import { switchExamples } from "./inputs/switch";
import { sliderExamples } from "./inputs/slider";

// Data Display
import { cardExamples } from "./data-display/card";
import { tableExamples } from "./data-display/table";
import { listExamples } from "./data-display/list";
import { avatarExamples } from "./data-display/avatar";
import { badgeExamples } from "./data-display/badge";
import { chipExamples } from "./data-display/chip";

// Feedback
import { alertExamples } from "./feedback/alert";
import { dialogExamples } from "./feedback/dialog";

// Navigation
import { tabsExamples } from "./navigation/tabs";

// Widgets
import { circularGaugeExamples } from "./widgets/circular-gauge";
import { linearGaugeExamples } from "./widgets/linear-gauge";
import { statisticExamples } from "./widgets/statistic";
import { dashboardGaugeExamples } from "./widgets/dashboard-gauge";

// Charts
import { lineChartExamples } from "./charts/line-chart";
import { barChartExamples } from "./charts/bar-chart";
import { areaChartExamples } from "./charts/area-chart";
import { pieChartExamples } from "./charts/pie-chart";
import { composedChartExamples } from "./charts/composed-chart";

// Custom Widgets
import { BasicBinExamples as BasicStorageBinExamples } from "./custom-widgets/basic-storage-bin";
import { miningBinExamples as BasicTrapezoidBinExamples } from "./custom-widgets/basic-trapezoid-bin";
import { IndustrialHopperExamples as BasicBinHopperExamples } from "./custom-widgets/basic-bin-hopper";
import { IndustrialBinHopperExamples } from "./custom-widgets/industrial-bin-hopper";

const examplesMap: Record<string, ComponentExample[]> = {
  button: buttonExamples,
  "text-field": textFieldExamples,
  select: selectExamples,
  checkbox: checkboxExamples,
  radio: radioExamples,
  switch: switchExamples,
  slider: sliderExamples,
  card: cardExamples,
  alert: alertExamples,
  dialog: dialogExamples,
  table: tableExamples,
  list: listExamples,
  avatar: avatarExamples,
  badge: badgeExamples,
  chip: chipExamples,
  tabs: tabsExamples,
  "circular-gauge": circularGaugeExamples,
  "linear-gauge": linearGaugeExamples,
  statistic: statisticExamples,
  "dashboard-gauge": dashboardGaugeExamples,
  "line-chart": lineChartExamples,
  "bar-chart": barChartExamples,
  "area-chart": areaChartExamples,
  "pie-chart": pieChartExamples,
  "composed-chart": composedChartExamples,
  "basic-storage-bin": BasicStorageBinExamples,
  "basic-trapezoid-bin": BasicTrapezoidBinExamples,
  "basic-bin-hopper": BasicBinHopperExamples,
  "industrial-bin-hopper": IndustrialBinHopperExamples,
};

export function getComponentExamples(componentId: string): ComponentExample[] {
  return examplesMap[componentId] || [];
}
