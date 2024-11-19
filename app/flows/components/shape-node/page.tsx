import {
    NodeResizer,
    type NodeProps,
    useStore,
    Handle,
    Position,
    useKeyPress,
    useReactFlow,
} from "@xyflow/react";
  
import Shape from "@/app/flows/components/shape/page";
import ShapeNodeToolbar from "../toolbar/page";
import { type ShapeNode } from "@/app/flows/components/shape/types/page";
import NodeLabel from "./label";
  
  // This will return the current dimensions of the node.
function useNodeDimensions(id: string) {
    const node = useStore((state) => state.nodeLookup.get(id));
    return {
      width: node?.measured?.width || 0,
      height: node?.measured?.height || 0,
    };
}
  
export default function ShapeNode({ id, selected, data }: NodeProps<ShapeNode>) {
    const { color, type } = data;
    const { setNodes } = useReactFlow();
  
    const { width, height } = useNodeDimensions(id);
    const shiftKeyPressed = useKeyPress("Shift");
    const handleStyle = { backgroundColor: color };
  
    const onColorChange = (color: string) => {
      setNodes((nodes) =>
        nodes.map((node) => {
          if (node.id === id) {
            return {
              ...node,
              data: {
                ...node.data,
                color,
              },
            };
          }

          return node;
        })
      );
    };
  
return (    
      <>
        <ShapeNodeToolbar onColorChange={onColorChange} activeColor={color} />
        <NodeResizer
          color={color}
          keepAspectRatio={shiftKeyPressed}
          isVisible={selected}
        />
        <Shape
          type={type}
          width={width}
          height={height}
          fill={color}
          strokeWidth={2}
          stroke={color}
          fillOpacity={0.8}
        />
        <Handle
          style={handleStyle}
          id="top"
          type="source"
          position={Position.Top}
        />
        <Handle
          style={handleStyle}
          id="right"
          type="source"
          position={Position.Right}
        />
        <Handle
          style={handleStyle}
          id="bottom"
          type="source"
          position={Position.Bottom}
        />
        <Handle
          style={handleStyle}
          id="left"
          type="source"
          position={Position.Left}
        />
        <NodeLabel placeholder={data.name} />
      </>
    );
}
