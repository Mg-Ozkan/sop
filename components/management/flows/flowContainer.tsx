"use client";

import { useMemo, useState } from "react";
import { FlowDefinition } from "@/components/types/FlowDefinition";
import { defaultDefinition } from "@/components/portal/flow/initial-elements";
import { FlowDisplay } from "@/components/portal/flow/FlowDisplay";

export type DetailsPageAction = "edit" | "new";

// export interface IDefinitionAction {
//     id: number | null,
//     action?: DetailsPageAction
// }

// export interface IDefinition {
//     definition: FlowDefinition;
//     //action?: IDefinitionAction;
// }

interface RoutingProps {
    id?: number | null;
  }

export const FlowContainer: React.FC<RoutingProps> = ({ id }) => {
    const [selectedDefinitionId, setSelectedDefinitionId] = useState<number | null>(id || null);

    // Get all existing flows to pass it to the FlowList component, this should be an api call
    const allDefinitions = useMemo(() => (
        defaultDefinition ? defaultDefinition.filter((d) => d.displayName) : []
    ), [defaultDefinition]);

    // Get the selected definition. From the action we determine if it is a new definition or an existing one
    const selectedDefinition = useMemo(() => {
        if (selectedDefinitionId === null) {
            return null;
        }
        if (defaultDefinition !== null) {
            const foundDefinition = defaultDefinition.find((d) => d.id === Number(selectedDefinitionId));
    
            return foundDefinition || null; // Return null if no match found
        }
        return null;
    }, [selectedDefinitionId]);

    const onBack = () => setSelectedDefinitionId(null);

    return (
        <>
            {/* {selectedDefinition === null ? (
                <FlowList definition={allDefinitions} onEdit={onEdit} onAdd={onAdd}  />
            ) : ( */}
                <FlowDisplay 
                    definition={selectedDefinition as FlowDefinition}
                    onBack={onBack} 
                />
            {/* )} */}
        </>
    );
};
