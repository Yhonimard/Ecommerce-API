import { Box, Grid, Stack, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Grid container spacing={2} py={3} bgcolor={``}>
      <Grid item xs={13} sm={6} md={4}>
        <Box overflow="hidden" borderRadius="2%">
          <img
            src="https://source.unsplash.com/500x500?bags"
            alt=""
            height={500}
            style={{ objectFit: "cover", width: "auto", maxWidth: "100%" }}
          />
        </Box>
        <Stack alignItems="center">
          <Typography variant="body2">featured</Typography>
          <Typography variant="body1">Nairo Series</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box overflow="hidden" borderRadius="2%">
          <img
            src="https://source.unsplash.com/500x500?bags"
            alt=""
            height={500}
            style={{ objectFit: "cover", width: "auto", maxWidth: "100%" }}
          />
        </Box>
        <Stack alignItems="center">
          <Typography variant="body2">featured</Typography>
          <Typography variant="body1">Nairo Series</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box overflow="hidden" borderRadius="2%">
          <img
            src="https://source.unsplash.com/500x500?bags"
            alt=""
            height={500}
            style={{ objectFit: "cover", width: "auto", maxWidth: "100%" }}
          />
        </Box>
        <Stack alignItems="center">
          <Typography variant="body2">featured</Typography>
          <Typography variant="body1">Nairo Series</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Banner;
