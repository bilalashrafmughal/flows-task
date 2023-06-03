import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import { AppBar } from "./styledComponents";
import { useSelector } from "react-redux";
import { getDrawer } from "@app/store/drawerSlice";
import { Avatar, Box, IconButton, Paper } from "@mui/material";
import BorderLessInput from "@app/shared-components/BorderLessInput";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
export default function Navbar() {
  const { open } = useSelector(getDrawer);
  return (
    <AppBar open={open} position="static" style={{ width: "95%" }}>
      <Toolbar className="!pl-0">
        <Box className="w-full flex items-center py-4">
          <Paper className="!shadow-none border-0 h-12 !rounded-sm flex items-center flex-1">
            <BorderLessInput
              placeholder="Start searching here..."
              disableUnderline
              className="!hidden md:!block flex-1"
            />
            <VerticalBar />
            <BorderLessInput
              placeholder="Search in..."
              disableUnderline
              endAdornment={<KeyboardArrowDownIcon htmlColor="#AFAFE9" />}
            />
          </Paper>
          <Box className="flex items-center space-x-3">
            <Box
              className="w-12 h-12 rounded-md flex items-center justify-center"
              style={{ background: "#3030AD" }}
            >
              <SearchIcon htmlColor="#fff" />
            </Box>
            <IconButton>
              <NotificationsNoneIcon htmlColor="#3030AD" />
            </IconButton>
            <Avatar
              alt="Dharan Haran"
              sizes="sm"
              className="!w-6 !h-6"
              sx={{ background: "#3030AD", fontSize: "10px" }}
            >
              DH
            </Avatar>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

const VerticalBar = () => (
  <svg
    width="2"
    height="26"
    viewBox="0 0 2 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 1V25" stroke="#AFAFE9" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
