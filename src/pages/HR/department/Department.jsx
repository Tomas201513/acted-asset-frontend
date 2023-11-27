import React from 'react';
import Datatable from 'src/components/datatable/Datatable';
import DepartmentContext from "src/context/DepartmentContext";
import {
    IconButton, Link, Tooltip,
  } from '@mui/material';
  import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
  import CreateUpdateDepartment from './CreateUpdateDepartment';

function Departments() {
    const getRowId = (row) => row._id;

    const {
        name,
        departmentData,
        isLoading,
        error,
        createOpen,
        setCreateOpen,
        selectedData,
        editable,
        setEditable,
        handleRowClick,
    } = React.useContext(DepartmentContext);
    console.log("departmentData",departmentData)
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
            field: 'dptName' ,
            headerName: 'DEPARTMENT NAME',
            flex: 0.7,
            minWidth: 130,
            editable: true,
            type: 'string',
        },
        {
            field: 'dptContactInfo',
            headerName: 'CONTACT INFO',
            flex: 0.7,
            minWidth: 100,
            editable: true,
            type: 'string',

        },
        {
            field: 'dptStatus',
            headerName: 'STATUS',
            flex: 0.7,
            minWidth: 100,
            editable: true,
            type: 'string',

        },
        {
          field:'dptLocation',
          headerName: 'dptLocation',
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
              <CreateUpdateDepartment
                name={name}
                selectedData={selectedData}
                editable={editable}
                setEditable={setEditable}
                createOpen={createOpen}
              />
            ) : (
      
              <Datatable
                columns={columns}
                rows={departmentData}
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
        );
      }

export default Departments