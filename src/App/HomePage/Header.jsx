import StyledBigButton from "@app/shared-components/StyledBigButton";
import { Box, Typography, styled } from "@mui/material";

const StyledTypography = styled(Typography)(() => ({
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: "40px",
  lineHeight: "52px",
  textTransform: "capitalize",
  fontFeatureSettings: "'pnum' on, 'lnum' on",
  color: "#0B0B28",
}));

export default function Header() {
  return (
    <Box className="flex flex-col md:flex-row space-y-4 items-center justify-between mt-10">
      <StyledTypography>Flows</StyledTypography>
      <StyledBigButton startIcon={<QuestionIcon />}>
        How do Flows work?
      </StyledBigButton>
    </Box>
  );
}

const QuestionIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.0844 4.48691C12.3954 4.32464 11.6785 4.32063 10.9877 4.47519C10.297 4.62975 9.65018 4.93885 9.09601 5.37927C8.54676 5.81473 8.10337 6.36903 7.79916 7.00049C7.49496 7.63196 7.33785 8.32417 7.33965 9.02509C7.33965 9.31442 7.45458 9.59189 7.65916 9.79648C7.86375 10.0011 8.14123 10.116 8.43055 10.116C8.71988 10.116 8.99736 10.0011 9.20194 9.79648C9.40653 9.59189 9.52146 9.31442 9.52146 9.02509C9.52035 8.59265 9.63231 8.16743 9.84622 7.7916C10.0601 7.41578 10.3686 7.10239 10.741 6.88254C11.1133 6.66268 11.5367 6.54398 11.9691 6.53822C12.4015 6.53245 12.8279 6.63982 13.206 6.84968C13.5841 7.05953 13.9008 7.36458 14.1247 7.73458C14.3485 8.10457 14.4718 8.52665 14.4822 8.95897C14.4926 9.39128 14.3898 9.81881 14.1841 10.1992C13.9783 10.5795 13.6767 10.8995 13.3091 11.1273C12.5889 11.5565 11.9904 12.1626 11.5704 12.8881C11.1504 13.6137 10.9227 14.4345 10.9091 15.2727C10.9091 15.5621 11.024 15.8395 11.2286 16.0441C11.4332 16.2487 11.7107 16.3636 12 16.3636C12.2893 16.3636 12.5668 16.2487 12.7714 16.0441C12.976 15.8395 13.0909 15.5621 13.0909 15.2727C13.107 14.8054 13.2418 14.3498 13.4827 13.949C13.7235 13.5482 14.0625 13.2154 14.4676 12.9818C15.2484 12.4955 15.8678 11.7891 16.248 10.9515C16.6281 10.1139 16.7521 9.18265 16.6042 8.2748C16.4564 7.36695 16.0433 6.52312 15.417 5.8495C14.7906 5.17587 13.9791 4.70255 13.0844 4.48909V4.48691Z"
      fill="#3030AD"
    />
    <path
      d="M12 0C9.62663 0 7.30655 0.703787 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.913451 7.4078C0.00519945 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6935 24 14.3734 24 12C23.9962 8.81855 22.7308 5.76849 20.4811 3.51886C18.2315 1.26924 15.1814 0.00375324 12 0ZM12 21.8182C10.0582 21.8182 8.15991 21.2424 6.54531 20.1635C4.93072 19.0847 3.6723 17.5513 2.92919 15.7573C2.18607 13.9632 1.99164 11.9891 2.37048 10.0846C2.74931 8.18003 3.6844 6.43059 5.0575 5.0575C6.4306 3.6844 8.18003 2.74931 10.0846 2.37047C11.9891 1.99163 13.9632 2.18607 15.7573 2.92918C17.5513 3.6723 19.0847 4.93072 20.1635 6.54531C21.2424 8.1599 21.8182 10.0581 21.8182 12C21.8153 14.6031 20.78 17.0987 18.9393 18.9393C17.0987 20.78 14.6031 21.8153 12 21.8182Z"
      fill="#3030AD"
    />
    <path
      d="M12 19.6364C12.6025 19.6364 13.0909 19.1479 13.0909 18.5455C13.0909 17.943 12.6025 17.4545 12 17.4545C11.3975 17.4545 10.9091 17.943 10.9091 18.5455C10.9091 19.1479 11.3975 19.6364 12 19.6364Z"
      fill="#3030AD"
    />
  </svg>
);