import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import Topbar from "../common/Topbar";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";
import colorConfigs from "../../configs/colorConfigs";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    const location = useLocation();

    // Verifique se a rota atual é a página de login
    const isLoginPage = location.pathname === "/login"; // substitua "/login" pela rota da sua página de login

    if (isLoginPage) {
        return (
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: "100%",
                    minHeight: "100vh",
                    backgroundColor: '#FFFFFF',
                    padding: 0,
                }}
            >
                <Outlet />
            </Box>
        );
    }

    return (
        <Box sx={{ display: "flex" }}>
            <Box
                component="nav"
                sx={{
                    width: sizeConfigs.sidebar.width,
                    flexShrink: 0
                }}
            >
                <Sidebar />
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: `calc(100% - ${sizeConfigs.sidebar.width})`,
                    minHeight: "100vh",
                    backgroundColor: '#F1F1F1'
                }}
            >
                <Topbar />
                <Outlet />
            </Box>
        </Box>
    );
};

export default MainLayout;