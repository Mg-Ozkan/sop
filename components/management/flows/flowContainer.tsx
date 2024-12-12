"use client";

import { useCallback, useMemo, useState } from "react";
import { FlowDefinition } from "@/components/types/FlowDefinition";
import { defaultDefinition } from "@/components/portal/flow/initial-elements";
import { FlowDisplay } from "@/components/portal/flow/FlowDisplay";
import { ReactFlowProvider } from "@xyflow/react";
import { FlowList } from "./FlowList";

export type DetailsPageAction = "edit" | "new";

interface RoutingProps {
    routeId?: number | null;
  }

export const FlowContainer: React.FC<RoutingProps> = ({ routeId }) => {
    const [selectedDefinitionId, setSelectedDefinitionId] = useState<number | null>(routeId || null);
    const [selectedAction, setSelectedAction] = useState<DetailsPageAction | null>(null);
    const [allDefinitions, setAllDefinitions] = useState<FlowDefinition[]>(defaultDefinition);

    // Get the selected definition based on action
    const selectedDefinition = useMemo(() => {
        if (selectedAction === 'new') {
            // Create a new empty definition
            return {
                id: null,
                displayName: '',
                isEnabled: true,
                nodes: [],
                edges: [],
            } as FlowDefinition;
        } else if (selectedAction === 'edit' && selectedDefinitionId !== null) {
            // Find the existing definition to edit
            const foundDefinition = allDefinitions.find((d) => d.id === selectedDefinitionId);
            return foundDefinition || null;
        }
        return null;
    }, [selectedAction, selectedDefinitionId, allDefinitions]);

    const onAdd = () => {
        setSelectedAction('new');
        setSelectedDefinitionId(null);
    };

    const onEdit = (id: number) => {
        setSelectedAction('edit');
        setSelectedDefinitionId(id);
    };

    const onBack = () => {
        if (selectedDefinitionId != null) {
            setSelectedDefinitionId(selectedDefinitionId);
            setSelectedAction("edit");
        } else {
            setSelectedDefinitionId(null);
            setSelectedAction(null);
        }
    };

  return (
    <>
      {selectedAction === null ? (
        <FlowList definitions={allDefinitions} onEdit={onEdit} onAdd={onAdd} onDelete={() => {}} />
      ) : (
        <ReactFlowProvider>
            <FlowDisplay definition={selectedDefinition as FlowDefinition} onBack={onBack} />
        </ReactFlowProvider>
      )}
    </>
  );
};
