import React, { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import PropTypes from "prop-types";
import ToastContext from "src/context/hot-toast-context/HotToastContext";
import {GetOffice, GetOfficeDetail, CreateOffice, UpdateOffice, DeleteOffice} from "src/apis/OfficeApi";

const OfficeContext = React.createContext({});
export default OfficeContext;

export const OfficeProvider = ({ children }) => {
    const [createOpen, setCreateOpen] = React.useState(false);
    const [selectedData, setSelectedData] = React.useState(null);
    const [editable, setEditable] = React.useState(false);
    const [warn, SetWarn] = React.useState(false);
    
    const name = "Office";
    const { showToast } = React.useContext(ToastContext);
    const handleRowClick = (params) => {
        // console.log(params);
        setSelectedData(params);
        // console.log(selectedData);
    };
    
    // GetUsers
    const queryResult = useQuery("office", GetOffice);
    
    const isLoading = queryResult.isLoading;
    const error = queryResult.error;
    const refetch = queryResult.refetch;
    const officeData = queryResult.data || [];
    const officeCounts = queryResult.data || [];
    // console.log('userData', userData);

    const { mutateAsync: createOffice } = useMutation(CreateOffice, {
        onSuccess: () => {
            // console.log("User updated successfully");
            setCreateOpen(false);
            
            showToast("Office created successfully", "success", 2000);
            refetch();
        },
        onError: (err) => {
            // console.log("User updated successfully");
            showToast(err.response
                .data.message, "error", 3000);
        },
    });

    const { mutateAsync: updateOffice } = useMutation(UpdateOffice, {
        onSuccess: () => {
            // console.log("User updated successfully");
            setCreateOpen(false);
            
            showToast("Office updated successfully", "success", 2000);
            refetch();
        },
        onError: (err) => {
            // console.log("User updated successfully");
            showToast(err.response
                .data.message, "error", 3000);
        },
    });

    const { mutateAsync: deleteOffice } = useMutation(DeleteOffice, {
        onSuccess: () => {
            // console.log("User updated successfully");
            setCreateOpen(false);
            
            showToast("Office deleted successfully", "success", 2000);
            refetch();
        },
        onError: (err) => {
            // console.log("User updated successfully");
            showToast(err.response
                .data.message, "error", 3000);
        },
    });
    

    return (
        <OfficeContext.Provider
            value={{
                handleRowClick,
                selectedData,
                setSelectedData,
                createOpen,
                setCreateOpen,
                editable,
                setEditable,
                warn,
                SetWarn,
                name,
                isLoading,
                error,
                refetch,
                officeData,
                officeCounts,
                createOffice,
                updateOffice,
                deleteOffice,
            }}
        >
            {children}
        </OfficeContext.Provider>
    );

};

OfficeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

    