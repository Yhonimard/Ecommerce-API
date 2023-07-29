import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Right from "./Right";

const Navbar = () => {
  return (
    <AppBar position="sticky" color="default">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography>yhoni bags shop</Typography>
        </Box>
        <Right />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
