import { type Edge } from "@xyflow/react";
import { type ShapeNode } from "./components/shape/types/page";

export const defaultNodes: ShapeNode[] = [
  {
    id: "1",
    type: "shape",
    position: { x: 0, y: 0 },
    style: { width: 100, height: 50 },
    data: {
      type: "round-rectangle",
      color: "#3F8AE2",
    },
  },
  {
    id: "2",
    type: "shape",
    position: { x: 0, y: 100 },
    style: { width: 100, height: 50 },
    data: {
      type: "round-rectangle",
      color: "#3F8AE2",
    },
  },
  {
    id: "3",
    type: "shape",
    position: { x: 0, y: 200 },
    style: { width: 100, height: 50 },
    data: {
      type: "round-rectangle",
      color: "#3F8AE2",
    },
  },
  {
    id: "4",
    type: "shape",
    position: { x: 0, y: 300 },
    style: { width: 100, height: 50 },
    data: {
      type: "round-rectangle",
      color: "#3F8AE2",
    },
  },
  {
    id: "5",
    type: "shape",
    position: { x: 0, y: 400 },
    style: { width: 100, height: 50 },
    data: {
      type: "round-rectangle",
      color: "#3F8AE2",
    },
  },
  {
    id: "6",
    type: "shape",
    position: { x: -200, y: 0 },
    style: { width: 60, height: 60 },
    data: {
      type: "circle",
      color: "#438D57",
    },
  },
  {
    id: "7",
    type: "shape",
    position: { x: -200, y: 100 },
    style: { width: 60, height: 60 },
    data: {
      type: "rectangle",
      color: "#438D57",
    },
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
    id: "6->7",
    source: "6",
    target: "7",
    sourceHandle: "bottom",
    targetHandle: "top",
  },
];
