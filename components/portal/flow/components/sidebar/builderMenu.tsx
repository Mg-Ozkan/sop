import React from "react";
import { ShapeNode } from "@/components/portal/flow/components/shape/types/page";
import { FlowDefinition } from "@/components/types/FlowDefinition";
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';

import "./css/builderMenu.scss";

type BuilderMenuProps = {
  definition: FlowDefinition | null;
  selectedNode: ShapeNode | null;
  onDefinitionUpdate?: (data: Partial<FlowDefinition>) => void;
  onNodeUpdate?: (nodeId: string, data: any) => void;
  onBack?: () => void;
};

export default function BuilderMenu({ definition, selectedNode, onDefinitionUpdate, onNodeUpdate, onBack }: BuilderMenuProps) {
  const onDisplayNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (definition && onDefinitionUpdate) {
      onDefinitionUpdate({
        ...definition,
        displayName: event.target.value
      });
    }
  };

  const onEnabledToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (definition && onDefinitionUpdate) {
      onDefinitionUpdate({
        ...definition,
        isEnabled: event.target.checked
      });
    }
  };

  return (
    <div className="buildermenu">
      <h3>Software Ontwikkel Proces</h3>
      <Box sx={{ p: 2 }}>
        <TextField
          fullWidth
          label="Display Name"
          value={definition?.displayName || ''}
          onChange={onDisplayNameChange}
          margin="normal"
          variant="outlined"
          size="small"
        />

      <TextField
        fullWidth
        label="Description"
        multiline
        rows={4}
        value={selectedNode?.data.name || ''}
        margin="normal"
        variant="outlined"
      />

        <h4>Active</h4>
        <FormControlLabel className="buildermenu-button"
          label={definition?.isEnabled ? "Enabled" : "Disabled"}
          control={
            <Switch
              checked={definition?.isEnabled || false}
              onChange={onEnabledToggle}
              color="primary"
            />
          }
        />
      </Box>
    </div>
  );
}
