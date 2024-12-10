import { ShapeNode } from "@/components/portal/flow/components/shape/types/page";
import { Edge } from "@xyflow/react";

export type FlowDefinition = {
    id: number | null;
    displayName: string;
    isEnabled: boolean;
    nodes?: ShapeNode[] | null;
    edges?: Edge[] | null;
};