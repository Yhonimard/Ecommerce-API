import { styled, Stack } from "@mui/material";

const StyledRightWrapperMobile = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export { StyledRightWrapperMobile };
