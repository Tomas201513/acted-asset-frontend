// import { HelmetProvider } from "react-helmet-async";
import RoutesComponent from "./routes";
import { CssBaseline } from "@mui/material";
import ErrorBoundary from "./ErrorBoundary";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastProvider } from "./context/hot-toast-context/HotToastContext";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import { ReactQueryDevtools } from "react-query/devtools";
import { BudgetProvider } from "./context/BudgetContext";
import { ProjectProvider } from "./context/ProjectContext";
import { AssetProvider } from "./context/AssetContext";
import {OfficeProvider} from "./context/OfficeContext";
import {DepartmentProvider} from "./context/DepartmentContext";
import {PositionProvider} from "./context/PositionContext";
import {CatagoryProvider} from "./context/CatagoryContext";
import {SubCatagoryProvider} from "./context/SubCatagoryContext";

import './App.css';
// import "/src/App";

function App() {

  const queryClient = new QueryClient();
  return (
    <>
    {/* <HelmetProvider> */}
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <ToastProvider>
          <ErrorBoundary>
            <AuthProvider>
            <CatagoryProvider>
            <SubCatagoryProvider>
              <PositionProvider>
                <OfficeProvider>
                  <DepartmentProvider>
                   <UserProvider>
                    <ProjectProvider>
                      <BudgetProvider>
                        <AssetProvider>
                          <RoutesComponent />
                        </AssetProvider>
                      </BudgetProvider>
                    </ProjectProvider>
                  </UserProvider>
                </DepartmentProvider>
               </OfficeProvider>
              </PositionProvider>
              </SubCatagoryProvider>
            </CatagoryProvider>
            </AuthProvider>
          </ErrorBoundary>
        </ToastProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    {/* </HelmetProvider> */}
    </>


  )
}

export default App
