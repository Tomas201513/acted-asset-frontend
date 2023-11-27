import React, { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import PropTypes from "prop-types";
import ToastContext from "src/context/hot-toast-context/HotToastContext";
import { GetBudget, GetBudgetDetail, CreateBudget, UpdateBudget, DeleteBudget,} from "src/apis/FinanceApi";


const BudgetContext = React.createContext({});
export default BudgetContext;

export const BudgetProvider = ({ children }) => {
    
        const [createOpen, setCreateOpen] = React.useState(false);
        const [selectedData, setSelectedData] = React.useState(null);
        const [editable, setEditable] = React.useState(false);
        const [warn, SetWarn] = React.useState(false);
        
        const name = "Budget";
        const { showToast } = React.useContext(ToastContext);
        const handleRowClick = (params) => {
            // console.log(params);
            setSelectedData(params);
            // console.log(selectedData);
        };
        
        const queryResult = useQuery("budget", GetBudget);
    
        const isLoading = queryResult.isLoading;
        const error = queryResult.error;
        const budgetData = queryResult.data;
        // console.log(budgetData);
        // console.log(isLoading);
        // console.log(error);
        // console.log(queryResult);
    
        const { mutateAsync: createBudget } = useMutation(CreateBudget, {
            onSuccess: () => {
                // console.log("User updated successfully");
                setCreateOpen(false);
                
                showToast("Budget created successfully", "success", 2000);
                queryResult.refetch();
            },
            onError: (err) => {
                // console.log("User updated successfully");
                showToast(err.response
                    .data.message, "error", 3000);
            },
        });

        const { mutateAsync: updateBudget } = useMutation(UpdateBudget, {
            onSuccess: () => {
                // console.log("User updated successfully");
                setCreateOpen(false);
                
                showToast("Budget updated successfully", "success", 2000);
                queryResult.refetch();
            },
            onError: (err) => {
                // console.log("User updated successfully");
                showToast(err.response
                    .data.message, "error", 3000);
            },
        });

        const { mutateAsync: deleteBudget } = useMutation(DeleteBudget, {
            onSuccess: () => {
                // console.log("User updated successfully");
                setCreateOpen(false);
                
                showToast("Budget deleted successfully", "success", 2000);
                queryResult.refetch();
            },
            onError: (err) => {
                // console.log("User updated successfully");
                showToast(err.response
                    .data.message, "error", 3000);
            },
        });

    return (
        <BudgetContext.Provider
            value={{
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
                createBudget,
                updateBudget,
                deleteBudget,
                warn,
                SetWarn,
            }}
        >
            {children}
        </BudgetContext.Provider>
    );
}

BudgetProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

