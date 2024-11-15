"use client";

import { DragEvent, DragEventHandler } from 'react';
import {
  ReactFlow,
  Background,
  ReactFlowProvider,
  ConnectionLineType,
  MarkerType,
  ConnectionMode,
  Panel,
  NodeTypes,
  DefaultEdgeOptions,
  Controls,
  useReactFlow,
} from '@xyflow/react';

import "@/app/flows/page.scss";
import '@xyflow/react/dist/style.css';

import { defaultNodes, defaultEdges } from './initial-elements';
import ShapeNodeComponent from './components/shape-node/page';
import Sidebar from './components/sidebar/page';
import { ShapeNode, ShapeType } from './components/shape/types/page';

const nodeTypes: NodeTypes = {
  shape: ShapeNodeComponent,
};

const defaultEdgeOptions: DefaultEdgeOptions = {
  type: 'smoothstep',
  markerEnd: { type: MarkerType.ArrowClosed },
  style: { strokeWidth: 2 },
};

const proOptions = { account: 'paid-pro', hideAttribution: true };

type DisplayProps = {
  theme?: 'dark' | 'light';
  snapToGrid?: boolean;
  panOnScroll?: boolean;
  zoomOnDoubleClick?: boolean;
};

function FlowDisplay({ theme = 'light', snapToGrid = true, panOnScroll = true, zoomOnDoubleClick = false, } : DisplayProps) {
  const { screenToFlowPosition, setNodes } = useReactFlow<ShapeNode>();

  const onDragOver = (evt: DragEvent<HTMLDivElement>) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'move';
  };

  // This function is called when a node from the sidebar is dropped onto the react flow pane
  const onDrop: DragEventHandler = (evt: DragEvent<HTMLDivElement>) => {
    evt.preventDefault();
    const type = evt.dataTransfer.getData('application/reactflow') as ShapeType;

    // This will convert the pixel position of the node to the react flow coordinate system
    // So that a node is added at the correct position even when viewport is translated and/or zoomed in
    const position = screenToFlowPosition({ x: evt.clientX, y: evt.clientY });

    const newNode: ShapeNode = {
      id: Date.now().toString(),
      type: 'shape',
      position,
      style: { width: 100, height: 100 },
      data: {
        type,
        color: '#3F8AE2',
      },
      selected: true,
    };

    setNodes((nodes) =>
      (nodes.map((n) => ({ ...n, selected: false })) as ShapeNode[]).concat([
        newNode,
      ])
    );
  };

  return (
    <ReactFlow
      colorMode={theme}
      proOptions={proOptions}
      nodeTypes={nodeTypes}
      defaultNodes={defaultNodes}
      defaultEdges={defaultEdges}
      defaultEdgeOptions={defaultEdgeOptions}
      connectionLineType={ConnectionLineType.SmoothStep}
      fitView
      connectionMode={ConnectionMode.Loose}
      panOnScroll={panOnScroll}
      onDrop={onDrop}
      snapToGrid={snapToGrid}
      snapGrid={[10, 10]}
      onDragOver={onDragOver}
      zoomOnDoubleClick={zoomOnDoubleClick}
    >
      <Background />
      <Panel position="top-left">
        <Sidebar />
      </Panel>
      <Controls />
    </ReactFlow>
  );
}

export default function ProExampleWrapper() {
  // Renders a leva control panel to interactively configure
  const props = {
    theme: 'light',
    snapToGrid: true,
    panOnScroll: true,
    zoomOnDoubleClick: false,
  };

  return (
    <ReactFlowProvider>
      <FlowDisplay {...(props as DisplayProps)} />
    </ReactFlowProvider>
  );
}
