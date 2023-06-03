import * as React from "react";
import Box from "@mui/material/Box";
import Header from "./Header";
import FiltersBar from "./FiltersBar";
import MessageBox from "./MessageBox";
export default function HomePage() {
  return (
    <Box component="main" sx={{ flexGrow: 1 }} className="px-14">
      <Header />
      <FiltersBar />
      <Box className="flex justify-center h-96">
        <MessageBox />
      </Box>
    </Box>
  );
}
