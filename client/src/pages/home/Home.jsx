import { Container } from "@mui/material";
import Banner from "./banner/banner";
import Brand from "./brand/Brand";
import Header from "./header/header";
import Content from "./content/content";

const Home = () => {
  return (
    <>
      <Header />
      <Container
        sx={{
          marginTop: "50px",
        }}
      >
        <Brand />
        <Banner />
        <Content />
      </Container>
    </>
  );
};

export default Home;
