import { ListItemButton, ListItemIcon } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import colorConfigs from '../../configs/colorConfigs';

const SidebarItemLogout = () => {

    const handleLogout = () => {
        window.location.href = '/login';
    }

    return (
        <ListItemButton
            onClick={handleLogout}
            sx={{
                "&: hover": {
                    backgroundColor: colorConfigs.sidebar.hoverBg
                },
                paddingY: "12px",
                paddingX: "24px"
            }}
        >
            <ListItemIcon sx={{
                color: colorConfigs.sidebar.color
            }}>
                <ExitToAppIcon />
            </ListItemIcon>
            Logout
        </ListItemButton>
    );
};

export default SidebarItemLogout;
