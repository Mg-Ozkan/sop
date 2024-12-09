import React from "react";
import { ShapeNode } from "@/components/portal/flow/components/shape/types/page";
import { FlowDefinition } from "@/components/types/FlowDefinition";
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';

import "./css/builderMenu.scss";
import { Button } from "@mui/material";

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

const onNodeNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (selectedNode && onNodeUpdate) {
    onNodeUpdate(selectedNode.id, {
      name: event.target.value,
    });
  }
};

const onNodeURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (selectedNode && onNodeUpdate) {
    onNodeUpdate(selectedNode.id, {
      url: event.target.value,
    });
  }
};

const onNodeDescriptionChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  if (selectedNode && onNodeUpdate) {
    onNodeUpdate(selectedNode.id, {
      description: event.target.value,
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
      <Box sx={{ p: 3 }}>
      <TextField
        fullWidth
        label="Competentienaam"
        value={definition?.displayName || ''}
        onChange={onDisplayNameChange}
        margin="normal"
        variant="outlined"
        size="small"
      />

      <TextField
        fullWidth
        label="Node naam"
        value={selectedNode?.data.name || ''}
        onChange={onNodeNameChange}
        margin="normal"
        variant="outlined"
        size="small"
      />

      <TextField
        fullWidth
        label="URL"
        value={selectedNode?.data.url || ''}
        onChange={onNodeURLChange}
        margin="normal"
        variant="outlined"
        size="small"
      />

      <TextField
        fullWidth
        label="Beschrijving"
        multiline
        rows={4}
        value={selectedNode?.data.description || ''}
        onChange={onNodeDescriptionChange}
        margin="normal"
        variant="outlined"
      />
        <h4>Active</h4>
      <div className="buildermenu-button">
        <FormControlLabel
          label={definition?.isEnabled ? "Aan" : "Uit"}
          control={
            <Switch
              checked={definition?.isEnabled || false}
              onChange={onEnabledToggle}
              color="primary"
            />
          }
        />
        <Button
          onClick={onBack} 
          variant="contained" 
          color="primary"> Save
        </Button>
      </div>

      {!selectedNode ?  (
        <div>Selecteer een node om aan te passen.</div>
      ) : null}
      </Box>
    </div>
  );
}
