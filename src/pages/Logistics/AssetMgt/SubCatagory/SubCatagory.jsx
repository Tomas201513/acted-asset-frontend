import React from 'react';
import Datatable from 'src/components/datatable/Datatable';
import  SubCatagoryContext from 'src/context/SubCatagoryContext';
import {
    IconButton, Link, Tooltip,
  } from '@mui/material';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CreateUpdateSubCatagory from './CreateUpdateSubCatagory';

function SubCatagory() {
  const getRowId = (row) => row._id;

  const {
      name,
      subcatagoryData,
      isLoading,
      error,
      createOpen,
      setCreateOpen,
      selectedData,
      editable,
      setEditable,
      handleRowClick,
      SetWarn
      } = React.useContext(SubCatagoryContext);  
  const columns = [
    {
      field: '_id',
      headerName: 'ID',
      flex: 0.3,
      minWidth: 30,
      type: 'number',
      hideable: true,
      // fontSize: 12,
    },
    {
      field : 'subCatagory',
      headerName: 'subCatagory',
      flex: 0.7,
      minWidth: 100,
      editable: true,
      type: 'string',

    },
    {
      field: "code",
      headerName: "code",
      flex: 0.7,
      minWidth: 100,
      editable: true,
      type: "string",

    },
    {
      field: "description",
      headerName: "description",
      flex: 0.7,
      minWidth: 100,
      editable: true,
      type: "string",

    },
    {
      field: "catagory",
      headerName: "catagory",
      flex: 0.7,
      minWidth: 100,
      editable: true,
      type: "string",
      valueGetter: (params) => {
        return params.row?.catagory?.catagory;
      }

    },
     {
      field: "actions",
      type: "actions",
      headerName: "ACTIONS",
      flex: 0.7,
      maxWidth: 100,
      minWidth: 60,
      renderCell: (params) => {
      return (
          <Tooltip title="View Details">
          <IconButton>
          <ArrowForwardIcon
              style={{ color: "#666666", cursor: "pointer" }}

              onClick={() => handleRowClick(params.row)}
          />
          </IconButton>
          </Tooltip>
      );
      },
    },
  ];
  return (
    <>
      {createOpen || selectedData ? (
        <CreateUpdateSubCatagory
          name={name}
          selectedData={selectedData}
          editable={editable}
          setEditable={setEditable}
          createOpen={createOpen}
        />
      ) : (
        <Datatable
          columns={columns}
          rows={subcatagoryData}
          createOpen={createOpen}
          setCreateOpen={setCreateOpen}
          editable={editable}
          setEditable={setEditable}
          getRowId={getRowId}
          isLoading={isLoading}
          error={error}
          name={name}
          SetWarn={SetWarn}
        />
      )}
    </>
  );
}

export default SubCatagory;

