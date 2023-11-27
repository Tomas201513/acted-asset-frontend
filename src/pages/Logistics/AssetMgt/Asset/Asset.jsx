import React from 'react';
import Datatable from 'src/components/datatable/Datatable';
import {
  Hidden,
  IconButton, Link, Tooltip,
} from '@mui/material';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CreateUpdateAsset from './CreateUpdateAsset';
import  AssetContext from 'src/context/AssetContext';

function Asset() {
    const getRowId = (row) => row._id;

    const {
        name,
        assetData,
        isLoading,
        error,
        createOpen,
        setCreateOpen,
        selectedData,
        editable,
        setEditable,
        handleRowClick,
        SetWarn
        } = React.useContext(AssetContext);
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
              field : 'Catagory',
              headerName: 'catagory',
              // flex: 0.7,
              // minWidth: 100,
              editable: true,
              type: 'string',
              hideable: true,
              valueGetter: (params) => {
                  return params.row?.subCatagory?.catagory?.catagory;
                  },

              },
            {
                field : 'subCatagory',
                headerName: 'subCatagory',
                flex: 0.7,
                minWidth: 100,
                editable: true,
                type: 'string',
                valueGetter: (params) => {
                    return params.row?.subCatagory?.subCatagory;
                    },

                }, {
                field: "type",
                headerName: "type",
                flex: 0.7,
                minWidth: 100,
                editable: true,
                type: "string",

                },
                {
                field: "brand",
                headerName: "brand",
                flex: 0.7,
                minWidth: 100,
                editable: true,
                type: "string",

                },
                {
                field: "model",
                headerName: "model",
                flex: 0.7,
                minWidth: 100,
                editable: true,
                type: "string",

                },
                {
                field: "serialNumber",
                headerName: "serialNumber",
                flex: 0.7,
                minWidth: 100,
                editable: true,
                type: "string",

                },
                {
                  field: "Donor",
                  headerName: "donorName",
                  flex: 0.7,
                  minWidth: 100,
                  editable: true,
                  type: "string",
                  hideable: true,
                  valueGetter: (params) => {
                      return params.row?.budget?.project?.donorName
                      },
                     },
                  {
                    field: "Project Code",
                    headerName: "projectCode",
                    flex: 0.7,
                    minWidth: 100,
                    editable: true,
                    type: "string",
                    hideable: true,
                    valueGetter: (params) => {
                        return params.row?.budget?.project?.projectCode
                        },
      
    
                    },
                    {
                      field: "Donor Code",
                      headerName: "donorCode",
                      flex: 0.7,
                      minWidth: 100,
                      editable: true,
                      type: "string",
                      hideable: true,
                      valueGetter: (params) => {
                          return params.row?.budget?.project?.donorCode
                          },
        
      
                      },
                {
                field: "budget",
                headerName: "budget",
                flex: 0.7,
                minWidth: 100,
                editable: true,
                type: "string",
                valueGetter: (params) => {
                    return params.row?.budget?.budgetName;
                    }


                },
                {
                field: "tag",
                headerName: "tag",
                flex: 0.7,
                minWidth: 100,
                editable: true,
                type: "string",

                },
                // {
                //   field: "item_count",
                //   headerName: "item_count",
                //   flex: 0.7,
                //   minWidth: 100,
                //   editable: true,
                //   type: "string",
  
                //   },
                //   {
                //     field: "probudcat",
                //     headerName: "probudcat",
                //     flex: 0.7,
                //     minWidth: 100,
                //     editable: true,
                //     type: "string",
    
                //     },

                {
                field: "price",
                headerName: "price",
                flex: 0.7,
                minWidth: 100,
                editable: true,
                type: "string",

                },
                {
                field: "registeringOfficer",
                headerName: "registeringOfficer",
                flex: 0.7,
                minWidth: 100,
                editable: true,
                type: "string",
                valueGetter: (params) => {
                    return params.row?.registeringOfficer?.userName;
                }

                },{
                field: "currentUser",
                headerName: "currentUser",
                flex: 0.7,
                minWidth: 100,
                editable: true,
                type: "string",
                valueGetter: (params) => {
                    return params.row?.currentUser?.userName;
                }},{
                  field: "User Position",
                  headerName: "userPosition",
                  flex: 0.7,
                  minWidth: 100,
                  editable: true,
                  type: "string",
                  valueGetter: (params) => {
                      return params.row?.currentUser?.position?.positionName;
                  }}
                  ,{
                    field: "Area",
                    headerName: "area",
                    flex: 0.7,
                    minWidth: 100,
                    editable: true,
                    type: "string",
                    valueGetter: (params) => {
                        return params.row?.currentUser?.office?.officeLocation;
                    }}
                    ,{
                      field: "Office",
                      headerName: "office",
                      flex: 0.7,
                      minWidth: 100,
                      editable: true,
                      type: "string",
                      valueGetter: (params) => {
                          return params.row?.currentUser?.office?.officeAreaName;
                      }}
                ,
                {
                field: "accessory",
                headerName: "accessory",
                flex: 0.7,
                minWidth: 100,
                editable: true,
                type: "string",

                },
                {
                field: "supplier",
                headerName: "supplier",
                flex: 0.7,
                minWidth: 100,
                editable: true,
                type: "string",

                },
                {
                field: "purchaseDate",
                headerName: "purchaseDate",
                flex: 0.7,
                minWidth: 100,
                editable: true,
                type: "string",

                },
                {
                field: "operationStartDate",
                headerName: "operationStartDate",
                flex: 0.7,
                minWidth: 100,
                editable: true,
                type: "string",

                },
                {
                field: "operationEndDate",
                headerName: "operationEndDate",
                flex: 0.7,
                minWidth: 100,
                editable: true,
                type: "string",
                renderCell: (params) => {
              if(new Date(params.row?.operationEndDate)<1){
                return (
                  <>
                {"-"}
                  </>)

              }
              else{
                return (
                  <>
                {params.row?.operationEndDate}
                  </>)}}

                },
                {
                field: "warranty",
                headerName: "warranty",
                flex: 0.7,
                minWidth: 100,
                editable: true,
                type: "string",

                },
                {
                field : 'status',
                headerName: 'status',
                flex: 0.7,
                minWidth: 100,
                editable: true,
                type: 'string',

                },
                {
                field: "reason",
                headerName: "reason",
                flex: 0.7,
                minWidth: 100,
                editable: true,
                type: "string",

                },
                {
                field : 'remarks',
                headerName: 'remarks',
                flex: 0.7,
                minWidth: 100,
                editable: true,
                type: 'string',

                },
                {
                field: "asset_state",
                headerName: "asset_state",
                flex: 0.7,
                minWidth: 100,
                editable: true,
                type: "string",
                    
            },
            {
            field: "Life Span",
            headerName: "lifeSpan",
            flex: 0.7,
            minWidth: 100,
            editable: true,
            type: "string",
            renderCell: (params) => {
              if(new Date(params.row?.operationEndDate)==0){
                return (
                  <>
                {Math.floor((new Date() - new Date(params.row?.purchaseDate)) / (1000 * 60 * 60 * 24))}
                  </>)

              }
              else{
                return (
                  <>
                {Math.floor((new Date(params.row?.operationEndDate) - new Date(params.row?.purchaseDate)) / (1000 * 60 * 60 * 24))}
                  </>)}}

                
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
                  <CreateUpdateAsset
                    name={name}
                    selectedData={selectedData}
                    editable={editable}
                    setEditable={setEditable}
                    createOpen={createOpen}
                  />
                ) : (
                  <Datatable
                columns={columns}
                rows={assetData}
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

export default Asset