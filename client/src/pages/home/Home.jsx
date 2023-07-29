import { Container } from "@mui/material";
import Header from "./header/Header";
import Brand from "./brand/Brand";
import Content from "./content/Content";
import Banner from "./banner/Banner";

const Home = () => {
  return (
    <Container maxWidth="xl" sx={{ mb: 5 }}>
      <Header />
      <Brand />
      <Banner />
      <Content />
    </Container>
  );
};

export default Home;
