import { ShapeNode } from "../components/shape/types/page";

export type FlowDefinition = {
    id: number;
    name: string;
    isEnabled: boolean;
    nodes: ShapeNode[];
  };