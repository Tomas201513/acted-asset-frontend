// UserContext.jsx
import React, { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import PropTypes from "prop-types";
import ToastContext from "src/context/hot-toast-context/HotToastContext";
import { GetProject, GetProjectDetail, CreateProject, UpdateProject, DeleteProject,} from "src/apis/FinanceApi";


const ProjectContext = React.createContext({});
export default ProjectContext;

export const ProjectProvider = ({ children }) => {
        
            const [createOpen, setCreateOpen] = React.useState(false);
            const [selectedData, setSelectedData] = React.useState(null);
            const [editable, setEditable] = React.useState(false);
            const [warn, SetWarn] = React.useState(false);
            
            const name = "Project";
            const { showToast } = React.useContext(ToastContext);
            const handleRowClick = (params) => {
                // console.log(params);
                setSelectedData(params);
                // console.log(selectedData);
            };
            
            const queryResult = useQuery("project", GetProject);
        
            const isLoading = queryResult.isLoading;
            const error = queryResult.error;
            const projectData = queryResult.data;
            console.log('projectData',projectData);
            // console.log(isLoading);
            // console.log(error);
            // console.log(queryResult);
        
            const { mutateAsync: createProject } = useMutation(CreateProject, {
                onSuccess: () => {
                    // console.log("User updated successfully");
                    setCreateOpen(false);
                    
                    showToast("Project created successfully", "success", 2000);
                    queryResult.refetch();
                },
                onError: (err) => {
                    // console.log("User updated successfully");
                    showToast(err.response
                        .data.message, "error", 3000);
                },
            });
    
            const { mutateAsync: updateProject } = useMutation(UpdateProject, {
                onSuccess: () => {
                    // console.log("User updated successfully");
                    setCreateOpen(false);
                    
                    showToast("Project updated successfully", "success", 2000);
                    queryResult.refetch();
                },
                onError: (err) => {
                    // console.log("User updated successfully");
                    showToast(err.response
                        .data.message, "error", 3000);
                },
            });
    
            const { mutateAsync: deleteProject } = useMutation(DeleteProject, {
                onSuccess: () => {
                    // console.log("User updated successfully");
                    setCreateOpen(false);
                    
                    showToast("Project deleted successfully", "success", 2000);
                    queryResult.refetch();
                },
                onError: (err) => {
                    // console.log("User updated successfully");
                    showToast(err.response
                        .data.message, "error", 3000);
                },
            });
        
            return (
                <ProjectContext.Provider
                    value={{
                        name,
                        projectData,
                        isLoading,
                        error,

                        createOpen,
                        setCreateOpen,
                        selectedData,
                        editable,
                        setEditable,
                        handleRowClick,
                        createProject,
                        updateProject,
                        deleteProject,
                    }}
                >
                    {children}
                </ProjectContext.Provider>
            );
        }

        ProjectProvider.propTypes = {
            children: PropTypes.node.isRequired,
        };

