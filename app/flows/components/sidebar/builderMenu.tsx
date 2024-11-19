import React from "react";
import { ShapeNode } from "@/app/flows/components/shape/types/page";

import "./css/builderMenu.scss";

type BuilderMenuProps = {
  selectedNode: ShapeNode | null;
  onNodeUpdate?: (nodeId: string, data: any) => void;
};

export default function BuilderMenu({ selectedNode, onNodeUpdate }: BuilderMenuProps) {
  if (!selectedNode) {
    return (
      <div className="buildermenu">
        <p>Select a node to view details</p>
      </div>
    );
  }

  const onActivate = () => {
    if (onNodeUpdate) {
      onNodeUpdate(selectedNode.id, {
        ...selectedNode.data,
        isActive: !selectedNode.data.isActive,
      });
    }
  };

  return (
    <div className="buildermenu">
      <h3>Details</h3>
      <div className="buildermenu-content">
        <p>ID: {selectedNode.id}</p>
        <p>Type: {selectedNode.data.type}</p>
        <p>Name: {selectedNode.data.name}</p>
        
        <button 
          className="buildermenu-button"
          onClick={onActivate}
        >
          {selectedNode.data.isActive ? "Deactivate" : "Activate"}
        </button>
      </div>
    </div>
  );
}