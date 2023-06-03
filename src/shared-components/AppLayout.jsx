import { Box } from "@mui/system";
export default function AppLayout({ SideBar, Navbar, Pages }) {
  return (
    <Box display="flex" height="100vh">
      {/* Sidebar */}
      <Box color="white">{SideBar}</Box>

      <Box flex="1" display="flex" flexDirection="column">
        {/* Navbar */}
        <Box py="2" color="white">
          {Navbar}
        </Box>
        {/* Pages */}
        <Box flex="1" p="4" overflow="auto">
          {Pages}
        </Box>
      </Box>
    </Box>
  );
}
