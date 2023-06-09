import { useState } from "react";
import { RouteType } from "../../routes/config"
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';
import SidebarItem from "./SidebarItem";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

type Props = {
    item: RouteType
}

const SidebarItemCollapse = ({item}: Props) => {
    const [open, setOpen] = useState(false)

  return (
    item.sidebarProps ? (
        <>
         <ListItemButton
                onClick={() => setOpen(!open)}
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
                    {item.sidebarProps.icon && item.sidebarProps.icon}
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    primary={
                        <Typography>
                            {item.sidebarProps.displayText}
                        </Typography>
                    }
                />
                {open ? <ExpandLessOutlinedIcon/> : <ExpandCircleDownIcon/>}
            </ListItemButton>
            <Collapse in={open} timeout="auto">
                <List>
                    {item.child?.map((route, index) => (
                    route.sidebarProps ? (
                        route.child ? (
                            <SidebarItemCollapse item={route} key={index}/>
                        ) : (
                            <SidebarItem item={route} key={index}/>
                        )
                    ) : null
                ))}
                </List>
            </Collapse>
        </>
    ) : null
  );
};

export default SidebarItemCollapse