import { Box, Stack, Typography } from "@mui/material";

const Content = () => {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} gap={5}>
      <Box>
        <img
          src="https://source.unsplash.com/500x500?bags"
          alt="bags"
          width="100%"
        />
      </Box>
      <Box>
        <Typography textTransform="uppercase">exclusive</Typography>
        <Typography textTransform="uppercase">50% off</Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
        voluptas.
      </Box>
    </Stack>
  );
};

export default Content;
