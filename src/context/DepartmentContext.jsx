// UserContext.jsx
import React, { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import PropTypes from "prop-types";
import ToastContext from "src/context/hot-toast-context/HotToastContext";
import { GetDepartment, GetDepartmentDetail, CreateDepartment, UpdateDepartment, DeleteDepartment } from "src/apis/DepartmentApi";


const DepartmentContext = React.createContext({});
export default DepartmentContext;

export const DepartmentProvider = ({ children }) => {
    const [createOpen, setCreateOpen] = React.useState(false);
    const [selectedData, setSelectedData] = React.useState(null);
    const [editable, setEditable] = React.useState(false);
    const [warn, SetWarn] = React.useState(false);
    
    const name = "Department";
    const { showToast } = React.useContext(ToastContext);
    const handleRowClick = (params) => {
        // console.log(params);
        setSelectedData(params);
        // console.log(selectedData);
    };
    
    // GetUsers
    const queryResult = useQuery("department", GetDepartment);
    console.log('queryResult ', queryResult);
    const isLoading = queryResult.isLoading;
    const error = queryResult.error;
    const refetch = queryResult.refetch;
    const departmentData = queryResult.data || [];
    const departmentCounts = queryResult.data?.departmentCounts || [];
    console.log('departmentDataaaaaaaaaaaaa ', departmentData);

    const { mutateAsync: createDepartment } = useMutation(CreateDepartment, {
        onSuccess: () => {
            // console.log("User updated successfully");
            setCreateOpen(false);
            
            showToast("Department created successfully", "success", 2000);
            refetch();
        },
        onError: (err) => {
            // console.log("User updated successfully");
            showToast(err.response
                .data.message, "error", 3000);
        },
    });

    const { mutateAsync: updateDepartment } = useMutation(UpdateDepartment, {
        onSuccess: () => {
            // console.log("User updated successfully");
            setCreateOpen(false);
            
            showToast("Department updated successfully", "success", 2000);
            refetch();
        },
        onError: (err) => {
            // console.log("User updated successfully");
            showToast(err.response
                .data.message, "error", 3000);
        },
    });

    const { mutateAsync: deleteDepartment } = useMutation(DeleteDepartment, {
        onSuccess: () => {
            // console.log("User updated successfully");
            setCreateOpen(false);
            
            showToast("Department deleted successfully", "success", 2000);
            refetch();
        },
        onError: (err) => {
            // console.log("User updated successfully");
            showToast(err.response
                .data.message, "error", 3000);
        },
    });

    const { data: departmentDetail, refetch: refetchDepartment } = useQuery(
        "departmentDetail",
        () => GetDepartmentDetail(selectedData?._id),
        {
            enabled: false,
        }
    );

    useEffect(() => {
        if (selectedData) {
            const fetchData = async () => {
                await refetch();
                await GetDepartmentDetail(selectedData?._id);
            };
            
            fetchData();
        }
    }
    , [selectedData, refetch]);

    return (
        <DepartmentContext.Provider
            value={{
                name,
                departmentData,
                departmentCounts,
                isLoading,
                error,
                refetch,
                handleRowClick,
                selectedData,
                setSelectedData,
                departmentDetail,
                refetchDepartment,
                createOpen,
                setCreateOpen,
                createDepartment,
                updateDepartment,
                deleteDepartment,
                editable,
                setEditable,
                warn,
                SetWarn,
            }}
        >
            {children}
        </DepartmentContext.Provider>
    );

};

DepartmentProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

