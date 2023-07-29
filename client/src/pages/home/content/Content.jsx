import { Box, Button, Stack, Typography } from "@mui/material";
import { Down} from "../../../theme";

const Content = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      gap={{ xs: 3, md: "5%" }}
      justifyContent="space-between"
      bgcolor="#F9FAFB"
      borderRadius="2%"
    >
      <Box overflow="hidden" borderRadius="2%" flex="0 0 50%">
        <img
          src="https://source.unsplash.com/500x500?bags"
          alt="bags"
          width="100%"
          height="100%"
          style={{
            overflow: "hidden",
            objectFit: "cover",
          }}
        />
      </Box>
      <Stack direction={{ sm: "column" }} margin="auto" flex="0 0 50%" gap={6}>
        <Stack gap={Down("md") ? 0 : 2}>
          <Typography textTransform="uppercase">exclusive</Typography>
          <Typography
            textTransform="uppercase"
            variant={Down("md") ? "h5" : "h4"}
            fontWeight={550}
          >
            50% off
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
            voluptas. Lorem ipsum dolor sit amet, qui minim labore adipisicing
            minim sint cillum sint consectetur cupidatat.
          </Typography>
        </Stack>
        <Box>
          <Button
            sx={{ textTransform: "uppercase" }}
            variant="contained"
            color="inherit"
          >
            shop now
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Content;
