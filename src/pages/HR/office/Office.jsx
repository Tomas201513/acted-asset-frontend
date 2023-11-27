import React from 'react';
import Datatable from '../../../components/datatable/Datatable';
import OfficeContext from '../../../context/OfficeContext';
import {
    IconButton, Link, Tooltip,
  } from '@mui/material';
  import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
  import CreateUpdateDepartment from './CreateUpdateOffice';

function Offices() {
    const getRowId = (row) => row._id;

    const {
        name,
        officeData,
        isLoading,
        error,
        createOpen,
        setCreateOpen,
        selectedData,
    editable,
    setEditable,
    handleRowClick,
  } = React.useContext(OfficeContext);
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
            field: 'officeLocation' ,
            headerName: 'officeLocation',
            flex: 0.7,
            minWidth: 130,
            editable: true,
            type: 'string',
        },
        {
            field: 'officeAreaName',
            headerName: 'officeAreaName',
            flex: 0.7,
            minWidth: 100,
            editable: true,
            type: 'string',

        },{
            field: 'officeSubAreaName',
            headerName: 'officeSubAreaName',
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
                rows={officeData}
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
      export default Offices;
      
      
      
      
    