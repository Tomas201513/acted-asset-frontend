import React from 'react';
import Datatable from 'src/components/datatable/Datatable';
import BudgetContext from 'src/context/BudgetContext';
import {
    IconButton, Link, Tooltip,
  } from '@mui/material';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CreateUpdateBudget from './CreateUpdateBudget';

function Budget() {
    const getRowId = (row) => row._id;

    const {
        name,
        budgetData,
        isLoading,
        error,
        createOpen,
        setCreateOpen,
        selectedData,
        editable,
        setEditable,
        handleRowClick,
        } = React.useContext(BudgetContext);
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
            field : 'projectCode',
            headerName: 'projectCode',
            flex: 0.7,
            minWidth: 100,
            editable: true,
            type: 'string',
            valueGetter: (params) => {
                return params.row?.project?.projectCode;
            }

        },
        {
            field: 'budgetName' ,
            headerName: 'budgetName',
            flex: 0.7,
            minWidth: 130,
            editable: true,
            type: 'string',
        },
        {
            field: 'budgetAmount',
            headerName: 'budgetAmount',
            flex: 0.7,
            minWidth: 100,
            editable: true,
            type: 'string',

        },{
            field: 'budgetStartDate',
            headerName: 'budgetStartDate',
            flex: 0.7,
            minWidth: 100,  
            editable: true,
            type: 'string',
        },{
            field: 'budgetEndDate',
            headerName: 'budgetEndDate',
            flex: 0.7,
            minWidth: 100,  
            editable: true,
            type: 'string',
        },
        {
            field: 'budgetStatus',
            headerName: 'budgetStatus',
            flex: 0.7,
            minWidth: 100,  
            editable: true,
            type: 'string',
        },
        {
            field: 'budgetType',
            headerName: 'budgetType',
            flex: 0.7,
            minWidth: 100,  
            editable: true,
            type: 'string',
        },
        {
            field: 'budgetDescription',
            headerName: 'budgetDescription',
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
                <CreateUpdateBudget
                name={name}
                selectedData={selectedData}
                editable={editable}
                setEditable={setEditable}
                setCreateOpen={setCreateOpen}
              />
            ) : (
              <Datatable
                name={name}
                columns={columns}
                rows={budgetData}
                getRowId={getRowId}
                error={error}
                isLoading={isLoading}
                handleRowClick={handleRowClick}
                setCreateOpen={setCreateOpen}
                title="Budget"
              />
            )}
          </>
    )
}

export default Budget

      