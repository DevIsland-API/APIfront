import { Box, Drawer, List, Stack, Toolbar } from "@mui/material";
import sizeConfigs from "../../configs/sizeConfigs";
import colorConfigs from "../../configs/colorConfigs";
import assets from "../../assets/images";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";
import SidebarItemLogout from "./SidebarItemLogout";

const Sidebar = () => {

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: sizeConfigs.sidebar.width,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: sizeConfigs.sidebar.width,
                    boxSizing: "border-box",
                    borderRight: "0px",
                    backgroundColor: colorConfigs.sidebar.bg,
                    color: colorConfigs.sidebar.color,
                },
            }}
        >
            <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <List disablePadding>
                    <Toolbar sx={{ marginBottom: "10px" }}>
                        <Stack
                            sx={{ width: "100%" }}
                            direction="row"
                            justifyContent="center"
                        >
                            <img
                                alt="ionic logo"
                                width="200px"
                                height="60px"
                                src={assets.images.logo}
                            />
                        </Stack>
                    </Toolbar>

                    {appRoutes.map((route, index) =>
                        route.sidebarProps ? (
                            route.child ? (
                                <SidebarItemCollapse item={route} key={index} />
                            ) : (
                                <SidebarItem item={route} key={index} />
                            )
                        ) : null
                    )}
                </List>
                <Box sx={{ marginTop: "auto" }}>
                    <SidebarItemLogout />
                </Box>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
