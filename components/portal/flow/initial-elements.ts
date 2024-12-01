import { type Edge } from "@xyflow/react";
import { type ShapeNode } from "./components/shape/types/page";
import { type FlowDefinition } from "@/components/types/FlowDefinition";

export const defaultNodes: ShapeNode[] = [
  {
    id: "1",
    type: "shape",
    position: { x: -200, y: 0 },
    style: { width: 100, height: 50 },
    data: {
      type: "circle",
      color: "#663366",
      name: "Implementatie",
    },
    selected: false,
  },
  {
    id: "2",
    type: "shape",
    position: { x: -200, y: 90 },
    style: { width: 100, height: 50 },
    data: {
      type: "round-rectangle",
      color: "#3F8AE2",
      name: "OO Technieken",
    },
    selected: false,
  },
  {
    id: "3",
    type: "shape",
    position: { x: -200, y: 180 },
    style: { width: 100, height: 50 },
    data: {
      type: "round-rectangle",
      color: "#3F8AE2",
      name: "Code kwaliteit",
    },
    selected: false,
  },
  {
    id: "4",
    type: "shape",
    position: { x: -235, y: 270 },
    style: { width: 170, height: 50 },
    data: {
      type: "round-rectangle",
      color: "#3F8AE2",
      name: "Klassendiagram implementeren",
    },
    selected: false,
  },
  {
    id: "5",
    type: "shape",
    position: { x: -200, y: 360 },
    style: { width: 100, height: 50 },
    data: {
      type: "round-rectangle",
      color: "#3F8AE2",
      name: "SQL",
    },
    selected: false,
  },
  {
    id: "6",
    type: "shape",
    position: { x: -380, y: 360 },
    style: { width: 120, height: 50 },
    data: {
      type: "round-rectangle",
      color: "#3F8AE2",
      name: "Verdieping T-SQL",
    },
    selected: false,
  },
  {
    id: "7",
    type: "shape",
    position: { x: -200, y: 450 },
    style: { width: 100, height: 50 },
    data: {
      type: "round-rectangle",
      color: "#3F8AE2",
      name: "Webtechnieken",
    },
    selected: false,
  },
];

export const defaultEdges: Edge[] = [
  {
    id: "1->2",
    source: "1",
    target: "2",
    sourceHandle: "bottom",
    targetHandle: "top",
  },
  {
    id: "2->3",
    source: "2",
    target: "3",
    sourceHandle: "bottom",
    targetHandle: "top",
  },
  {
    id: "3->4",
    source: "3",
    target: "4",
    sourceHandle: "bottom",
    targetHandle: "top",
  },
  {
    id: "4->5",
    source: "4",
    target: "5",
    sourceHandle: "bottom",
    targetHandle: "top",
  },
  {
    id: "5->6",
    source: "5",
    target: "6",
    sourceHandle: "left",
    targetHandle: "right",
  },
  {
    id: "5->7",
    source: "5",
    target: "7",
    sourceHandle: "bottom",
    targetHandle: "top",
  },
];

export const defaultDefinition: FlowDefinition[] = [
  {
    id: 1,
    displayName: "Flow 1",
    isEnabled: true,
    nodes: defaultNodes,
    edges: defaultEdges
  }
];
