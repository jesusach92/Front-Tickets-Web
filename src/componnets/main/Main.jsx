import { Box, Grid } from "@mui/material";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Section from "./Section";
const Main = () => {
  return (
    <Box>
      <Grid container direction={"column"} height="100vh" flexWrap={"nowrap"}>
        <Grid item>
          <NavBar />
        </Grid>
        <Grid item flexGrow={1} >
          <Section />
        </Grid>
        <Grid item>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
