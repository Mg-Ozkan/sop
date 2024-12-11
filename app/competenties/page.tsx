"use client";

import { FlowContainer } from "@/components/management/flows/flowContainer";

interface CompetentiesPageProps { params: { id: string; } }

export default function FlowPage({ params }: CompetentiesPageProps) {
  return <FlowContainer routeId={parseInt(params.id)} />;
}