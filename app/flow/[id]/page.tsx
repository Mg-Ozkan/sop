import { FlowContainer } from "@/components/management/flows/flowContainer";
import { ReactFlowProvider } from "@xyflow/react";

export default function FlowPage({ params }: { params: { id: number | null } }) {
    return (
        <ReactFlowProvider>
            <FlowContainer id={params.id} />
        </ReactFlowProvider>
    );
}
  