"use client";

import React from "react";
import { DataGrid, GridColDef, GridRowParams, GridRenderCellParams } from "@mui/x-data-grid";
import { Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { FlowDefinition } from "@/components/types/FlowDefinition";

import "./css/FlowList.scss";

interface FlowListProps {
  definitions: FlowDefinition[];
  onEdit: (id: number) => void;
  onAdd: () => void;
  onDelete: (id: number) => void;
}

export const FlowList: React.FC<FlowListProps> = ({ definitions, onEdit, onAdd, onDelete }) => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "displayName", headerName: "Display Name", flex: 1 },
    {
      field: "isEnabled",
      headerName: "Enabled",
      width: 150,
      renderCell: (params) => (params.value ? "Yes" : "No"),
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      sortable: false,
      filterable: false,
      renderCell: (params: GridRenderCellParams) => (
        <>
          <IconButton
            color="primary"
            aria-label="edit"
            onClick={(event) => {
              event.stopPropagation(); // Prevents the row click event
              onEdit(params.row.id);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            color="secondary"
            aria-label="delete"
            onClick={(event) => {
              event.stopPropagation(); // Prevents the row click event
              onDelete(params.row.id);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  const handleRowClick = (params: GridRowParams) => {
    const id = params.row.id as number;
    onEdit(id);
  };

  return (
    <div
      style={{
        height: "95%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
    <div className="header">
        <h2>Competenties</h2>
        <Button
          variant="contained"
          color="primary"
          onClick={onAdd}
          style={{ alignSelf: "end" }}
        >
          +
        </Button>
      </div>
      <DataGrid
        style={{ background: "white" }}
        rows={definitions}
        columns={columns}
        pageSizeOptions={[5, 10, 20, 100]}
        disableRowSelectionOnClick
        onRowClick={handleRowClick}
        autoPageSize
      />
    </div>
  );
};