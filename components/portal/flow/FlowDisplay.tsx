"use client";

import React from "react";
import { DragEvent, DragEventHandler } from "react";
import { ReactFlow, Background, ReactFlowProvider, ConnectionLineType, MarkerType, ConnectionMode, Panel, NodeTypes, DefaultEdgeOptions, Controls, useReactFlow } from "@xyflow/react";
import ShapeNodeComponent from "./components/shape-node/page";
import Sidebar from "./components/sidebar/page";
import { ShapeNode, ShapeType } from "./components/shape/types/page";
import BuilderMenu from "./components/sidebar/builderMenu";
import { FlowDefinition } from "@/components/types/FlowDefinition";

import "@xyflow/react/dist/style.css";
import "./page.scss";

const nodeTypes: NodeTypes = {
  shape: ShapeNodeComponent,
};

interface FlowDisplayProps {
  definition: FlowDefinition | null;
  onBack?: () => void;
}

const defaultEdgeOptions: DefaultEdgeOptions = {
  type: "smoothstep",
  markerEnd: { type: MarkerType.ArrowClosed },
  style: { strokeWidth: 2 },
};

const proOptions = { account: "paid-pro", hideAttribution: true };

export const FlowDisplay: React.FC<FlowDisplayProps> = ({ definition, onBack }) => {
  const [selectedDefinition, setSelectedDefinition] = React.useState<FlowDefinition | null>(definition);
  const { screenToFlowPosition, setNodes } = useReactFlow<ShapeNode>();
  const [selectedNode, setSelectedNode] = React.useState<ShapeNode | null>(null);

  const onNodeClick = React.useCallback((event: React.MouseEvent, node: ShapeNode) => {
    setSelectedNode(node);
  }, []);

  const onDefinitionUpdate = React.useCallback((newDefinitionData: Partial<FlowDefinition>) => {
    setSelectedDefinition((prev) => prev ? { ...prev, ...newDefinitionData } : null);
  }, []);

  const onNodeUpdate = React.useCallback((nodeId: string, data: any) => {
    setNodes((nodes) =>
      nodes.map((node) =>
        node.id === nodeId ? { 
          ...node, 
          data: { 
            ...node.data, 
            ...data 
          } 
        } : node
      )
    );
  }, [setNodes]);

  const onDragOver = (evt: DragEvent<HTMLDivElement>) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  };

  // This function is called when a node from the sidebar is dropped onto the react flow pane
  const onDrop: DragEventHandler = (evt: DragEvent<HTMLDivElement>) => {
    evt.preventDefault();
    const type = evt.dataTransfer.getData("application/reactflow") as ShapeType;

    // This will convert the pixel position of the node to the react flow coordinate system
    // So that a node is added at the correct position even when viewport is translated and/or zoomed in
    const position = screenToFlowPosition({ x: evt.clientX, y: evt.clientY });

    const newNode: ShapeNode = {
      id: Date.now().toString(),
      type: "shape",
      position,
      style: { width: 70, height: 70 },
      data: {
        type,
        color: "#3F8AE2",
        name: type,
      },
      selected: false,
    };

    setNodes((nodes) =>
      (nodes.map((n) => ({ 
        ...n, 
        selected: false 
      })) as ShapeNode[]
    ).concat([
        newNode,
      ])
    );
  };

  return (
    <div className="container">
      <div className="react-flow-container">
          <ReactFlow
            colorMode="dark"
            proOptions={proOptions}
            nodeTypes={nodeTypes}
            defaultNodes={selectedDefinition?.nodes || []}
            defaultEdges={selectedDefinition?.edges || []}
            defaultEdgeOptions={defaultEdgeOptions}
            connectionLineType={ConnectionLineType.SmoothStep}
            fitView
            connectionMode={ConnectionMode.Loose}
            panOnScroll={true}
            onDrop={onDrop}
            snapToGrid={true}
            snapGrid={[10, 10]}
            onDragOver={onDragOver}
            zoomOnDoubleClick={false}
            onNodeClick={onNodeClick}
          >
            <Background />
            <Panel position="top-left">
              <Sidebar />
            </Panel>
            <Controls />
          </ReactFlow>
        </div>
        <BuilderMenu
          definition={selectedDefinition}
          selectedNode={selectedNode}
          onDefinitionUpdate={onDefinitionUpdate}
          onNodeUpdate={onNodeUpdate}
          onBack={onBack}
        />
      </div>
  );
}

export const FlowDisplayWrapper = () => {
  return (
    <ReactFlowProvider>
      <FlowDisplay definition={null} />
    </ReactFlowProvider>
  );
}
