import React, { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import PropTypes from "prop-types";
import ToastContext from "src/context/hot-toast-context/HotToastContext";
import { GetPosition, GetPositionDetail, CreatePosition, UpdatePosition, DeletePosition } from "src/apis/positionApi.jsx";


const PositionContext = React.createContext();
export default PositionContext;

export const PositionProvider = ({ children }) => {
    const [createOpen, setCreateOpen] = React.useState(false);
    const [selectedData, setSelectedData] = React.useState(null);
    const [editable, setEditable] = React.useState(false);
    const [warn, SetWarn] = React.useState(false);
    
    const name = "Position";
    const { showToast } = React.useContext(ToastContext);
    const handleRowClick = (params) => {
        // console.log(params);
        setSelectedData(params);
        // console.log(selectedData);
    };

    const queryResult = useQuery("position", GetPosition);

    const isLoading = queryResult.isLoading;
    const error = queryResult.error;
    const positionData = queryResult.data;
    // console.log(positionData);
    // console.log(isLoading);
    // console.log(error);
    // console.log(queryResult);

    const { mutateAsync: createPosition } = useMutation(CreatePosition, {
        onSuccess: () => {
            // console.log("User updated successfully");
            setCreateOpen(false);
            
            showToast("Position created successfully", "success", 2000);
            queryResult.refetch();
        },
        onError: (err) => {
            // console.log("User updated successfully");
            showToast(err.response
                .data.message, "error", 3000);
        },
    });

    const { mutateAsync: updatePosition } = useMutation(UpdatePosition, {
        onSuccess: () => {
            // console.log("User updated successfully");
            setCreateOpen(false);
            
            showToast("Position updated successfully", "success", 2000);
            queryResult.refetch();
        },
        onError: (err) => {
            // console.log("User updated successfully");
            showToast(err.response
                .data.message, "error", 3000);
        },
    });

    const { mutateAsync: deletePosition } = useMutation(DeletePosition, {
        onSuccess: () => {
            // console.log("User updated successfully");
            setCreateOpen(false);
            
            showToast("Position deleted successfully", "success", 2000);
            queryResult.refetch();
        },
        onError: (err) => {
            // console.log("User updated successfully");
            showToast(err.response
                .data.message, "error", 3000);
        },
    });

    return (
        <PositionContext.Provider
            value={{
                name,
                createOpen,
                setCreateOpen,
                selectedData,
                setSelectedData,
                editable,
                setEditable,
                warn,
                SetWarn,
                handleRowClick,
                positionData,
                isLoading,
                error,
                createPosition,
                updatePosition,
                deletePosition,
            }}
        >
            {children}
        </PositionContext.Provider>
    );

};

PositionProvider.propTypes = {
    children: PropTypes.node.isRequired,
};