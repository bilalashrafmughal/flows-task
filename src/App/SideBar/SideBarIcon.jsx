import { styled, Box } from "@mui/material";

const StyledIconButton = styled(Box)(({ theme, active }) => ({
  ...(active === "true" && {
    background: "#4D4DE5",
  }),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: 4,
  padding: 10,
  "& .vertical-bar": {
    marginLeft: "-6px",
    paddingRight: "6px",
  },
}));

export default function SideBarIcon({ iconProps, active }) {
  return (
    <StyledIconButton active={active}>
      <Box className="vertical-bar">
        {active === "true" && (
          <img
            src={`/assets/sidebar-icons/vertical-bar.svg`}
            alt="active-indecator"
          />
        )}
      </Box>
      <Box>
        <img src={iconProps.icon} alt="active-indecator" />
      </Box>
    </StyledIconButton>
  );
}
