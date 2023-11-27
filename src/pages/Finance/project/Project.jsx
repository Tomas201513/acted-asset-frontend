import React from 'react';
import Datatable from 'src/components/datatable/Datatable';
import ProjectContext from 'src/context/ProjectContext';
import {
    IconButton, Link, Tooltip,
  } from '@mui/material';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


import CreateUpdateProject from './CreateUpdateProject';

function Project() {
    const getRowId = (row) => row._id;

    const {
        name,
        projectData,
        isLoading,
        error,
        createOpen,
        setCreateOpen,
        selectedData,
        editable,
        setEditable,
        handleRowClick,
        } = React.useContext(ProjectContext);
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
            field : 'donorName',
            headerName: 'donorName',
            flex: 0.7,
            minWidth: 100,
            editable: true,
            type: 'string',

        },
        {
            field: 'donorCode' ,
            headerName: 'donorCode',
            flex: 0.7,
            minWidth: 130,
            editable: true,
            type: 'string',
        },
        {
            field: 'projectName',
            headerName: 'projectName',
            flex: 0.7,
            minWidth: 100,
            editable: true,
            type: 'string',

        },{
            field: 'projectCode',
            headerName: 'projectCode',
            flex: 0.7,
            minWidth: 100,
            editable: true,
            type: 'string',

        },
        // {
        //     field: 'startDate',
        //     headerName: 'startDate',
        //     flex: 0.7,
        //     minWidth: 100,
        //     editable: true,
        //     type: 'string',

        // },
        // {
        //     field: 'endDate',
        //     headerName: 'endDate',
        //     flex: 0.7,
        //     minWidth: 100,
        //     editable: true,
        //     type: 'string',

        // },
        // {
        //     field: 'status',
        //     headerName: 'status',
        //     flex: 0.7,
        //     minWidth: 100,
        //     editable: true,
        //     type: 'string',

        // },
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
            }
          },
        ];

    return (
        <>
            {createOpen || selectedData ? (
              <CreateUpdateProject 
                setCreateOpen={setCreateOpen}
                selectedData={selectedData}
                editable={editable}
                setEditable={setEditable}
                />

            ) : (
                <Datatable
                name={name} 
                columns={columns}
                rows={projectData}
                getRowId={getRowId}
                error={error}
                isLoading={isLoading}
                handleRowClick={handleRowClick}
                setCreateOpen={setCreateOpen}
                title="Project"
              />
            )}
        </>
    )
}

export default Project


