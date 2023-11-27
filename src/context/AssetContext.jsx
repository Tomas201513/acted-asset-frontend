 import React, { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import PropTypes from "prop-types";
import ToastContext from "src/context/hot-toast-context/HotToastContext";
import {GetAsset, GetAssetDetail, CreateAsset, UpdateAsset, DeleteAsset} from "src/apis/AssetApi";


const AssetContext = React.createContext();
export default AssetContext;

export const AssetProvider = ({ children }) => {

    const [createOpen, setCreateOpen] = React.useState(false);
    const [selectedData, setSelectedData] = React.useState(null);
    const [editable, setEditable] = React.useState(false);
    const [warn, SetWarn] = React.useState(false);
    
    const name = "Asset";
    const { showToast } = React.useContext(ToastContext);
    const handleRowClick = (params) => {
        // console.log(params);
        setSelectedData(params);
        // console.log(selectedData);
    };

    const queryResult = useQuery("asset", GetAsset);

    const isLoading = queryResult.isLoading;
    const error = queryResult.error;
    const assetData = queryResult.data;
    // console.log(assetData);
    // console.log(isLoading);
    // console.log(error);
    // console.log(queryResult);

    const { mutateAsync: createAsset } = useMutation(CreateAsset, {
        onSuccess: () => {
            // console.log("User updated successfully");
            setCreateOpen(false);
            
            showToast("Asset created successfully", "success", 2000);
            queryResult.refetch();
        },
        onError: (err) => {
            // console.log("User updated successfully");
            showToast(err.response
                .data.message, "error", 3000);
        },
    });

    const { mutateAsync: updateAsset } = useMutation(UpdateAsset, {
        onSuccess: () => {
            // console.log("User updated successfully");
            setCreateOpen(false);
            
            showToast("Asset updated successfully", "success", 2000);
            queryResult.refetch();
        },
        onError: (err) => {
            // console.log("User updated successfully");
            showToast(err.response
                .data.message, "error", 3000);
        },
    });

    const { mutateAsync: deleteAsset } = useMutation(DeleteAsset, {
        onSuccess: () => {
            // console.log("User updated successfully");
            setCreateOpen(false);
            
            showToast("Asset deleted successfully", "success", 2000);
            queryResult.refetch();
        },
        onError: (err) => {
            // console.log("User updated successfully");
            showToast(err.response
                .data.message, "error", 3000);
        },
    });

    return (    
        <AssetContext.Provider
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
                assetData,
                createAsset,
                updateAsset,
                deleteAsset,
            }}
        >
            {children}
        </AssetContext.Provider>
    );
}

AssetProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
