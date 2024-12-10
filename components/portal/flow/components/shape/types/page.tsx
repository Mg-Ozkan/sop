import { SVGAttributes } from "react";
import type { Node } from "@xyflow/react";

import RoundRectangle from "./round-rectangle";
import Circle from "./circle";
import Rectangle from "./rectangle";

// Register all the shapes that are available
export const ShapeComponents = {
  circle: Circle,
  "round-rectangle": RoundRectangle,
  rectangle: Rectangle,
};

export type ShapeType = keyof typeof ShapeComponents;

export type ShapeProps = {
  width: number;
  height: number;
} & SVGAttributes<SVGElement>;

export type ShapeComponentProps = Partial<ShapeProps> & { type: ShapeType };

export type ShapeNode = Node<{
  type: ShapeType;
  color: string;
  name: string;
  description: string;
  url: string;
  isActive: boolean;
}>;
