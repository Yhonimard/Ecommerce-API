/* eslint-disable no-unused-vars */
import { Box, Typography, Stack, Button } from "@mui/material";
import headerSectImg from "../../../assets/HeaderSection.png";
import {
  CustomHeaderBox,
  CustomHeaderBoxImg,
  CustomHeaderContentBox,
  StyledButton,
} from "./styled";

const Header = () => {
  return (
    <CustomHeaderBox direction="row">
      <CustomHeaderBoxImg>
        <img
          src={headerSectImg}
          alt="headerimg"
          style={{ objectFit: "cover", display: "block" }}
          width="100%"
          height="auto"
        />
      </CustomHeaderBoxImg>
      <CustomHeaderContentBox
        sx={{ xs: { width: "100%" }, justifyContent: "center" }}
      >
        <Stack
          sx={{
            width: { xs: "100%", lg: "80%", sm: "90%" },
          }}
          rowGap={1}
        >
          <Stack rowGap={1}>
            <Typography>YHONI</Typography>
            <Typography variant="h4">Leather Bags worth hugging</Typography>
            <Typography>
              Keep your everyday style chic and on-trend with our selection 20+
              styles to choose from.
            </Typography>
            <StyledButton>SEE COLLECTION</StyledButton>
          </Stack>
        </Stack>
      </CustomHeaderContentBox>
    </CustomHeaderBox>
  );
};

export default Header;
