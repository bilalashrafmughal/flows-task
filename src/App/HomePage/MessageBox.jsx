import { Box, styled, Typography } from "@mui/material";

const StyledMessage = styled(Typography)(() => ({
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "center",
  color: "#0b0b288b",
  fontFeatureSettings: "'pnum' on, 'lnum' on",
}));

export default function MessageBox() {
  return (
    <Box className="flex flex-col items-center justify-center md:w-4/12 w-full">
      <Box className="mb-4">
        <img src="/assets/other/flows-icon.svg" alt="flow-img" />
      </Box>
      <StyledMessage>
        Please use the Search Fields above to either display the Flow of a
        specific Component Type or to find where a specific component is in
        their Flow.
      </StyledMessage>
    </Box>
  );
}
