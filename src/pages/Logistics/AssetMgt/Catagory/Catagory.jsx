import React from 'react';
import Datatable from 'src/components/datatable/Datatable';
import {
  IconButton, Link, Tooltip,
} from '@mui/material';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CreateUpdateCatagory from './CreateUpdateCatagory';
import  CatagoryContext from 'src/context/CatagoryContext';

function Catagory() {
    const getRowId = (row) => row._id;

    const {
        name,
        catagoryData,
        isLoading,
        error,
        createOpen,
        setCreateOpen,
        selectedData,
        editable,
        setEditable,
        handleRowClick,
        SetWarn
        } = React.useContext(CatagoryContext);
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
            field : 'catagory',
            headerName: 'catagory',
            flex: 0.7,
            minWidth: 100,
            editable: true,
            type: 'string',

          }, {
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
            <CreateUpdateCatagory
              name={name}
              selectedData={selectedData}
              editable={editable}
              setEditable={setEditable}
              createOpen={createOpen}
            />
          ) : (
            <Datatable
          columns={columns}
          rows={catagoryData}
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

export default Catagory