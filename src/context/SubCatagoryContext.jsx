import React, { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import PropTypes from "prop-types";
import ToastContext from "src/context/hot-toast-context/HotToastContext";
import { GetSubCatagory, GetSubCatagoryDetail, CreateSubCatagory, UpdateSubCatagory, DeleteSubCatagory,} from "../apis/SubCatagoryApi";


const SubCatagoryContext = React.createContext({});
export default SubCatagoryContext;

export const SubCatagoryProvider = ({ children }) => {

    const [createOpen, setCreateOpen] = React.useState(false);
        const [selectedData, setSelectedData] = React.useState(null);
        const [editable, setEditable] = React.useState(false);
        const [warn, SetWarn] = React.useState(false);
        
        const name = "SubCatagory";
        const { showToast } = React.useContext(ToastContext);
        const handleRowClick = (params) => {
            // console.log(params);
            setSelectedData(params);
            // console.log(selectedData);
        };

        const queryResult = useQuery("subcatagory", GetSubCatagory);

        const isLoading = queryResult.isLoading;
        const error = queryResult.error;
        const subcatagoryData = queryResult.data;
        console.log("subcatagoryData",subcatagoryData);
        // console.log(isLoading);
        // console.log(error);
        // console.log(queryResult);

        const { mutateAsync: createSubCatagory } = useMutation(CreateSubCatagory, {
            onSuccess: () => {
                // console.log("User updated successfully");
                setCreateOpen(false);
                
                showToast("SubCatagory created successfully", "success", 2000);
                queryResult.refetch();
            },
            onError: (err) => {
                // console.log("User updated successfully");
                showToast(err.response
                    .data.message, "error", 3000);
            },
        });

        const { mutateAsync: updateSubCatagory } = useMutation(UpdateSubCatagory, {
            onSuccess: () => {
                // console.log("User updated successfully");
                setCreateOpen(false);
                
                showToast("SubCatagory updated successfully", "success", 2000);
                queryResult.refetch();
            },
            onError: (err) => {
                // console.log("User updated successfully");
                showToast(err.response
                    .data.message, "error", 3000);
            },
        });

        const { mutateAsync: deleteSubCatagory } = useMutation(DeleteSubCatagory, {
            onSuccess: () => {
                // console.log("User updated successfully");
                setCreateOpen(false);
                
                showToast("SubCatagory deleted successfully", "success", 2000);
                queryResult.refetch();
            },
            onError: (err) => {
                // console.log("User updated successfully");
                showToast(err.response
                    .data.message, "error", 3000);
            },
        });

    return (
        <SubCatagoryContext.Provider
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
                isLoading,
                error,
                subcatagoryData,
                createSubCatagory,
                updateSubCatagory,
                deleteSubCatagory,
            }}
        >
            {children}
        </SubCatagoryContext.Provider>
    );

};

SubCatagoryProvider.propTypes = {
    children: PropTypes.node.isRequired,
};