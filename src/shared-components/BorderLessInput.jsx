import { styled, Input } from "@mui/material";

const BorderLessInput = styled(Input)(() => ({
  padding: 12,
  fontSize: "16px",
  lineHeight: "24px",
  "& ::placeholder": {
    color: "",
    fontSize: "16px",
  },
}));

export default BorderLessInput;
