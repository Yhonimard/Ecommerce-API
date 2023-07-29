import { createTheme, useMediaQuery } from "@mui/material";

const theme = createTheme({
  components: {},
  palette: {
    background: {},
  },
  breakpoints: {},
});
export default theme;

export const Up = (up) => useMediaQuery(theme.breakpoints.up(up));

export const Down = (down) => useMediaQuery(theme.breakpoints.down(down));
