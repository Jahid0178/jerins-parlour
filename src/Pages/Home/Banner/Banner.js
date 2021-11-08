import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Container, Typography } from "@mui/material";
import BannerImg from "../../../images/banner-img.png";

const alignment = {
  display: "flex",
  alignItems: "center",
};

const Banner = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1, mt: 3 }}>
        <Grid container spacing={2} style={alignment}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h2" sx={{ fontWeight: 500 }}>
              Beauty Salon <br /> For Every Women
            </Typography>
            <Typography variant="body1" sx={{ my: 3 }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
              maiores odio ducimus alias, ad iusto non corporis veritatis.
              Quisquam sequi itaque numquam quod,
            </Typography>
            <Button variant="contained" sx={{ py: 1.3 }}>
              Get An Appointment
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img src={BannerImg} style={{ width: 450 }} alt="" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Banner;
