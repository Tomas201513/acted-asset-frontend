import React from 'react';
import Datatable from '../../../components/datatable/Datatable';
import PositionContext from '../../../context/PositionContext';
import {
    IconButton, Link, Tooltip,
  } from '@mui/material';
  import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
  import CreateUpdatePosition from './CreateUpdatePosition';

function Positions() {
    const getRowId = (row) => row._id;

    const {
        name,
        positionData,
        isLoading,
        error,
        createOpen,
        setCreateOpen,
        selectedData,
    editable,
    setEditable,
    handleRowClick,
  } = React.useContext(PositionContext);
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
            field: 'positionName' ,
            headerName: 'positionName',
            flex: 0.7,
            minWidth: 130,
            editable: true,
            type: 'string',
        },
        {
            field: 'department',
            headerName: 'department',
            flex: 0.7,
            minWidth: 100,
            editable: true,
            type: 'string',
            valueGetter: (params) => {
              return params.row?.department?.dptName;
              },

        },{
            field: 'positionStatus',
            headerName: 'positionStatus',
            flex: 0.7,
            minWidth: 100,  
            editable: true,
            type: 'string',
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
            }
          },
        ];
    return (
        <>
         {createOpen || selectedData ? (
             <CreateUpdatePosition
             name={name}
             selectedData={selectedData}
             editable={editable}
             setEditable={setEditable}
             createOpen={createOpen}
           
            />
            ) : (

                <Datatable
                columns={columns}
                rows={positionData}
                createOpen={createOpen}
                setCreateOpen={setCreateOpen}
                editable={editable}
                setEditable={setEditable}
                getRowId={getRowId}
                isLoading={isLoading}
                error={error}
                name={name}
            />
            )}

        </>
    )
}

export default Positions
