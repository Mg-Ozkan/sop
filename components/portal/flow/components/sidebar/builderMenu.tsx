import React from "react";
import { ShapeNode } from "@/components/portal/flow/components/shape/types/page";
import { FlowDefinition } from "@/components/types/FlowDefinition";
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';

import "./css/builderMenu.scss";

// Styled box for the menu container
const StyledBox = styled(Box)({
  backgroundColor: '#161A30',
  color: 'white',
});

// Styled text field for the input fields
const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#1D2138',
    color: 'white',
    '& fieldset': {
      borderColor: '#31304D',
    },
    '&:hover fieldset': {
      borderColor: '#424769',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#424769',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'white',
    '&.Mui-focused': {
      color: '#424769',
    },
  },
});

// Styled form control label for the switch
const StyledFormControlLabel = styled(FormControlLabel)({
  color: 'white',
  '& .MuiSwitch-root': {
    '& .MuiSwitch-switchBase': {
      '&.Mui-checked': {
        color: '#424769',
        '& + .MuiSwitch-track': {
          backgroundColor: '#31304D',
        },
      },
    },
    '& .MuiSwitch-track': {
      backgroundColor: '#31304D',
    },
  },
});

// Button container styling for the save and cancel buttons
const ButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '16px',
  marginTop: '16px',
  flexDirection: 'row',
  alignItems: 'baseline'
});

// Opslaan button
const StyledButton = styled(Button)({
  backgroundColor: '#31304D',
  color: 'white',
  '&:hover': {
    backgroundColor: '#424769',
  },
});

// Annuleren button
const StyledButtonSecondary = styled(Button)({
  backgroundColor: '#1D2138',
  color: 'white',
  '&:hover': {
    backgroundColor: '#2A2D4C',
  },
});

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
      <StyledBox sx={{ p: 3 }}>
        <StyledTextField
          fullWidth
          label="Competentie naam"
          value={definition?.displayName || ''}
          onChange={onDisplayNameChange}
          margin="normal"
          variant="outlined"
          size="small"
        />

        <StyledTextField
          fullWidth
          label="Node naam"
          value={selectedNode?.data.name || ''}
          onChange={onNodeNameChange}
          margin="normal"
          variant="outlined"
          size="small"
        />

        <StyledTextField
          fullWidth
          label="URL"
          value={selectedNode?.data.url || ''}
          onChange={onNodeURLChange}
          margin="normal"
          variant="outlined"
          size="small"
        />

        <StyledTextField
          fullWidth
          label="Beschrijving"
          multiline
          rows={4}
          value={selectedNode?.data.description || ''}
          onChange={onNodeDescriptionChange}
          margin="normal"
          variant="outlined"
        />

        <h4 style={{ color: 'white' }}>Actief</h4>
        <StyledFormControlLabel
          className="buildermenu-button"
          label={definition?.isEnabled ? "Ingeschakeld" : "Uitgeschakeld"}
          control={
            <Switch
              checked={definition?.isEnabled || false}
              onChange={onEnabledToggle}
            />
          }
        />
        <ButtonContainer>
          <StyledButtonSecondary
            onClick={onBack}
            variant="contained"
          >
            Annuleren
          </StyledButtonSecondary>
          <StyledButton
            onClick={onBack} 
            variant="contained"
          >
            Opslaan
          </StyledButton>
        </ButtonContainer>
        {!selectedNode && (
          <div style={{ color: 'white', marginTop: '16px' }}>
            Selecteer een node om het aan te passen.
          </div>
        )}
      </StyledBox>
    </div>
  );
}
