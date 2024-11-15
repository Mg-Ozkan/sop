import { type MiniMapNodeProps, useInternalNode } from '@xyflow/react';
import { ShapeComponents, ShapeNode } from '@/app/flows/components/shape/types/page';

// Custom minimap node, is used to render the shapes of the nodes in the minimap
export default function MiniMapNode({ id, width, height, x, y, selected }: MiniMapNodeProps) {
  // Get the node data to render the shape
  const internalNode = useInternalNode<ShapeNode>(id);

  if (!internalNode) {
    return;
  }

  const { color, type } = internalNode.internals.userNode.data;
  if (!color || !type) {
    return null;
  }

  const ShapeComponent = ShapeComponents[type];

  return (
    <g
      transform={`translate(${x}, ${y})`}
      className={
        selected
          ? 'react-flow__minimap-node selected'
          : 'react-flow__minimap-node'
      }
    >
      <ShapeComponent
        width={width}
        height={height}
        fill={color}
        strokeWidth={selected ? 6 : 0}
      />
    </g>
  );
}
