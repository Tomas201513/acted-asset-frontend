import React, { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import PropTypes from "prop-types";
import ToastContext from "src/context/hot-toast-context/HotToastContext";
import { GetCatagory, GetCatagoryDetail, CreateCatagory, UpdateCatagory, DeleteCatagory,} from "../apis/CatagoryApi";


const CatagoryContext = React.createContext({});
export default CatagoryContext;

export const CatagoryProvider = ({ children }) => {

const [createOpen, setCreateOpen] = React.useState(false);
        const [selectedData, setSelectedData] = React.useState(null);
        const [editable, setEditable] = React.useState(false);
        const [warn, SetWarn] = React.useState(false);
        
        const name = "catagory";
        const { showToast } = React.useContext(ToastContext);
        const handleRowClick = (params) => {
            // console.log(params);
            setSelectedData(params);
            // console.log(selectedData);
        };

        const queryResult = useQuery("catagory", GetCatagory);

        const isLoading = queryResult.isLoading;
        const error = queryResult.error;
        const catagoryData = queryResult.data;
        console.log("catagoryData",catagoryData);
        console.log(isLoading);
        console.log(error);
        console.log(queryResult);

        const { mutateAsync: createCatagory } = useMutation(CreateCatagory, {
            onSuccess: () => {
                // console.log("User updated successfully");
                setCreateOpen(false);
                
                showToast("catagory created successfully", "success", 2000);
                queryResult.refetch();
            },
            onError: (err) => {
                // console.log("User updated successfully");
                showToast(err.response
                    .data.message, "error", 3000);
            },
        });

        const { mutateAsync: updateCatagory } = useMutation(UpdateCatagory, {
            onSuccess: () => {
                // console.log("User updated successfully");
                setCreateOpen(false);
                
                showToast("catagory updated successfully", "success", 2000);
                queryResult.refetch();
            },
            onError: (err) => {
                // console.log("User updated successfully");
                showToast(err.response
                    .data.message, "error", 3000);
            },
        });

        const { mutateAsync: deleteCatagory } = useMutation(DeleteCatagory, {
            onSuccess: () => {
                // console.log("User updated successfully");
                setCreateOpen(false);
                
                showToast("catagory deleted successfully", "success", 2000);
                queryResult.refetch();
            },
            onError: (err) => {
                // console.log("User updated successfully");
                showToast(err.response
                    .data.message, "error", 3000);
            },
        });

        return (
            <CatagoryContext.Provider
                value={{
                    createOpen,
                    setCreateOpen,
                    selectedData,
                    setSelectedData,
                    editable,
                    setEditable,
                    warn,
                    SetWarn,
                    name,
                    handleRowClick,
                    queryResult,
                    isLoading,
                    error,
                    
                    catagoryData,
                    createCatagory,
                    updateCatagory,
                    deleteCatagory,

                }}
            >
                {children}
            </CatagoryContext.Provider>
        );
    };

    CatagoryProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };
    
