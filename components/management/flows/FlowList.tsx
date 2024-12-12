"use client";

import React from "react";
import { DataGrid, GridColDef, GridRowParams, GridRenderCellParams } from "@mui/x-data-grid";
import { Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { FlowDefinition } from "@/components/types/FlowDefinition";
import { styled } from '@mui/material/styles';

// Styled container for the component
const StyledContainer = styled('div')({
  height: '95%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

// Styled header container for the title and add button
const HeaderContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '16px',
});

// Styled header title
const HeaderTitle = styled('h2')({
  color: 'white',
  margin: 0,
});

// Styled button for adding a new flow
const StyledButton = styled(Button)({
  backgroundColor: '#31304D',
  color: 'white',
  '&:hover': {
    backgroundColor: '#424769',
  },
});

// Styled data grid component for displaying the competenties
const StyledDataGrid = styled(DataGrid)({
  background: '#161A30',
  borderColor: '#31304D',
  color: 'white',
  fontWeight: 'bold',
  
  // Override the container background
  '--DataGrid-containerBackground': '#1D2138 !important',
  
  '& .MuiDataGrid-main': {
    backgroundColor: '#1D2138',
  },

  '& .MuiDataGrid-columnHeaders': {
    backgroundColor: '#1D2138',
    color: 'white',
    fontWeight: 'bold',
  },
  
  '& .MuiDataGrid-row': {
    backgroundColor: '#1D2138',
    '&:hover': {
      backgroundColor: '#2A2D4C',
    },
  },
  
  '& .MuiDataGrid-cell': {
    borderColor: '#31304D',
    color: 'white',
  },
  
  '& .MuiDataGrid-footerContainer': {
    borderColor: '#31304D',
    color: 'white',
    backgroundColor: '#161A30',
  },

  '& .MuiIconButton-root': {
    color: 'white',
  },
});

// Styled icon button for the edit and delete buttons
const StyledIconButton = styled(IconButton)({
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
});

// Props for the FlowList component
interface FlowListProps {
  definitions: FlowDefinition[];
  onEdit: (id: number) => void;
  onAdd: () => void;
  onDelete: (id: number) => void;
}

export const FlowList: React.FC<FlowListProps> = ({ definitions, onEdit, onAdd, onDelete }) => {
  // Define the columns for the data grid component to display the competenties
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "displayName", headerName: "Competentie Naam", flex: 1 },
    {
      field: "isEnabled",
      headerName: "Actief",
      width: 150,
      renderCell: (params) => (params.value ? "Ja" : "Nee"),
    },
    {
      field: "actions",
      headerName: "Acties",
      width: 150,
      sortable: false,
      filterable: false,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <StyledIconButton
            aria-label="edit"
            onClick={(event) => {
              event.stopPropagation();
              onEdit(params.row.id);
            }}
          >
            <EditIcon />
          </StyledIconButton>
          <StyledIconButton
            aria-label="delete"
            onClick={(event) => {
              event.stopPropagation();
              onDelete(params.row.id);
            }}
          >
            <DeleteIcon />
          </StyledIconButton>
        </>
      ),
    },
  ];

  // Handle the row click event to open the competency
  const handleRowClick = (params: GridRowParams) => {
    const id = params.row.id as number;
    onEdit(id);
  };

  return (
    <StyledContainer>
      <HeaderContainer>
        <HeaderTitle>Competenties</HeaderTitle>
        <StyledButton
          variant="contained"
          onClick={onAdd}
        >
          +
        </StyledButton>
      </HeaderContainer>
      <StyledDataGrid
        rows={definitions}
        columns={columns}
        pageSizeOptions={[5, 10, 20, 100]}
        disableRowSelectionOnClick
        onRowClick={handleRowClick}
        autoPageSize
      />
    </StyledContainer>
  );
};