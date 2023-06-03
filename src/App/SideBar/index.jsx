import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { DrawerHeader, Drawer } from "./styledComponents";
import { useDispatch, useSelector } from "react-redux";
import { getDrawer, setOpen } from "@app/store/drawerSlice";
import sidebarConfig, { drawerSwitchButtonConfig } from "./sidebarConfig";
import SideBarIcon from "./SideBarIcon";
import { Box } from "@mui/material";

export default function SideBar() {
  const dispatch = useDispatch();
  const { open } = useSelector(getDrawer);
  const [selectedPage, setSelectedPage] = useState(sidebarConfig[0]);
  return (
    <Drawer
      variant="permanent"
      open={open}
      classes={{
        paper: "flex flex-col justify-between",
      }}
    >
      <DrawerHeader>
        <Box className="flex items-center justify-center">
          <img src="/assets/sidebar-icons/logo.svg" />
        </Box>
      </DrawerHeader>
      <Divider />
      <List className="flex flex-col justify-between">
        {sidebarConfig.map((item, index) => (
          <ListItem
            key={item.id}
            disablePadding
            sx={{ display: "block" }}
            className="mb-6"
            onClick={() => setSelectedPage(item)}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <SideBarIcon
                  iconProps={item}
                  active={(selectedPage.id === item.id).toString()}
                />
              </ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={{ opacity: open ? 1 : 0, color: "#fff" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <ListItem
        key={"switch-button"}
        disablePadding
        sx={{ display: "block" }}
        className="mb-10"
      >
        <ListItemButton
          sx={{
            minHeight: 48,
            justifyContent: open ? "initial" : "center",
            px: 2.5,
          }}
          onClick={() => dispatch(setOpen(!open))}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : "auto",
              justifyContent: "center",
            }}
          >
            <SideBarIcon
              iconProps={drawerSwitchButtonConfig}
              active={open.toString()}
            />
          </ListItemIcon>
          <ListItemText
            primary={open ? "Close Drawer" : "Open Drawer"}
            sx={{ opacity: open ? 1 : 0, color: "#fff" }}
          />
        </ListItemButton>
      </ListItem>
    </Drawer>
  );
}
