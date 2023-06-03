import LabeledInput from "@app/shared-components/LabeledInput";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function FiltersBar() {
  return (
    <Box className="flex flex-col md:flex-row items-center justify-between md:space-x-6 mt-9">
      <LabeledInput
        label="Component Type"
        placeholder="Type here..."
        endAdornment={<SearchIcon htmlColor="#3030AD" />}
      />
      <LabeledInput
        label="Specific Component"
        placeholder="Type here..."
        endAdornment={<SearchIcon htmlColor="#3030AD" />}
      />
    </Box>
  );
}
