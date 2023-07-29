import { Box, Button, styled } from "@mui/material";

styled(Box)(() => ({}));
const CustomHeaderBox = styled(Box)(({ theme }) => ({
  marginBottom: "50px",
  display: "flex",
  flexDirection: "row",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    rowGap: "20px",
  },
}));

const CustomHeaderBoxImg = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  borderRadius: "2%",
  maxWidth: "50%",
  [theme.breakpoints.down("md")]: {
    maxWidth: "100%",
  },
}));

const CustomHeaderContentBox = styled(Box)(({ theme }) => ({
  width: "50%",
  margin: "auto",
  display: "flex",
  alignItems: "flex-start",
  padding: "0 2%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: "0 5%",
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: 10,
  borderBottomStyle: "solid",
  borderBottomWidth: "1px",
  borderColor: theme.palette.text.primary,
  width: "fit-content",
  cursor: "pointer",
  color: theme.palette.text.primary,
}));
export {
  CustomHeaderBox,
  CustomHeaderBoxImg,
  CustomHeaderContentBox,
  StyledButton,
};
