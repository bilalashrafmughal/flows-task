import { styled, Button } from "@mui/material";

const StyledBigButton = styled(Button)(() => ({
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "24px",
  fontFeatureSettings: "'pnum' on, 'lnum' on",
  color: "#3030AD",
  border: "1px solid #3030AD",
  borderRadius: "2px",
  padding: "16px 24px",
}));

export default StyledBigButton;
