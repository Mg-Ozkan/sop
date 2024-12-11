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
      description: "Application implementation process",
      url: "https://www.fontys.nl/implementation",
      isActive: true,
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
      description: "Techniques for object-oriented programming",
      url: "https://www.fontys.nl/oo-techniques",
      isActive: true,
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
      description: "Ensuring high code quality standards",
      url: "https://www.fontys.nl/code-quality",
      isActive: true,
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
      description: "Implementing class diagrams",
      url: "https://www.fontys.nl/class-diagrams",
      isActive: true,
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
      description: "Basics of Structured Query Language",
      url: "https://www.fontys.nl/sql-basics",
      isActive: true,
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
      description: "Advanced techniques in T-SQL",
      url: "https://www.fontys.nl/advanced-tsql",
      isActive: true,
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
      description: "Technologies for web development",
      url: "https://www.fontys.nl/web-technologies",
      isActive: true,
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
    displayName: "Competentie filled in",
    isEnabled: true,
    nodes: defaultNodes,
    edges: defaultEdges
  },
  {
    id: 2,
    displayName: "Competentie Semester  2",
    isEnabled: true,
    nodes: [],
    edges: []
  }
];
