import React from "react";
import { ShapeNode } from "@/components/portal/flow/components/shape/types/page";

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
      <h3>Software Ontwikkel Proces</h3>
      <div className="buildermenu-content">
        <p>Node Name: {selectedNode.data.name}</p>
      </div>
    </div>
  );
}