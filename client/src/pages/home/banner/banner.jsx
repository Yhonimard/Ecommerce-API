import { Grid, Stack, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Grid container spacing={2} py={3}>
      <Grid item xs={12} sm={6} md={4}>
        <img
          src="https://source.unsplash.com/500x500?bags"
          alt=""
          width="100%"
          height={500}
          style={{ objectFit: "cover" }}
        />
        <Stack alignItems="center">
          <Typography variant="body2">featured</Typography>
          <Typography variant="body1">Nairo Series</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <img
          src="https://source.unsplash.com/500x500?bags"
          alt=""
          width="100%"
          height={500}
          style={{ objectFit: "cover" }}
        />
        <Stack alignItems="center">
          <Typography variant="body2">featured</Typography>
          <Typography variant="body1">Nairo Series</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <img
          src="https://source.unsplash.com/500x500?bags"
          alt=""
          width="100%"
          height={500}
          style={{ objectFit: "cover" }}
        />
        <Stack alignItems="center">
          <Typography variant="body2">featured</Typography>
          <Typography variant="body1">Nairo Series</Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Banner;
