import {
  FavoriteBorder,
  Person2Outlined,
  ShoppingBagOutlined,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { Badge, Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { StyledRightWrapperMobile } from "./styled";
const Right = () => {
  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  const openMenu = (e) => {
    setAnchor(e.currentTarget);
  };
  const closeMenu = () => {
    setAnchor(null);
  };

  const pages = ["Home", "Shop", "About", "Contact"];
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        {pages.map((i) => (
          <Button key={i} sx={{ color: "text.primary" }}>
            {i}
          </Button>
        ))}
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <IconButton>
          <Person2Outlined />
        </IconButton>
        <IconButton>
          <FavoriteBorder />
        </IconButton>
        <IconButton>
          <Badge badgeContent={2}>
            <ShoppingBagOutlined />
          </Badge>
        </IconButton>
      </Box>
      <StyledRightWrapperMobile direction="row" display={{}}>
        <IconButton>
          <Badge badgeContent={2}>
            <ShoppingBagOutlined />
          </Badge>
        </IconButton>
        <IconButton onClick={openMenu}>
          <MenuIcon />
        </IconButton>
        <Menu
          onClose={closeMenu}
          open={open}
          anchorEl={anchor}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          PaperProps={{ sx: {} }}
        >
          <MenuItem>adasd</MenuItem>
          <MenuItem>adasd</MenuItem>
          <MenuItem>adasd</MenuItem>
        </Menu>
      </StyledRightWrapperMobile>
    </>
  );
};

export default Right;
