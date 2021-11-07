import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ReviewImg from "../../../images/review.png";

const Review = () => {
  return (
    <Container>
      <Grid container spacing={2} sx={{ my: 5 }}>
        <Grid item xs={12} sm={12} md={6}>
          <img style={{ width: "450px" }} src={ReviewImg} alt="" />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h4">
            Let us handle your <br /> screen professionally
          </Typography>
          <Typography sx={{ my: 3 }}>
            With well written codes, we build amazing apps for all platforms,
            mobile and web apps in general ipsum.Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Purus commodo ipsum.
          </Typography>
          <Box sx={{ display: "flex", mt: 3 }}>
            <Box sx={{ mr: 4 }}>
              <Typography
                sx={{ fontWeight: "bold" }}
                color="primary"
                variant="h4"
              >
                500 +
              </Typography>
              <Typography>Happy Customer</Typography>
            </Box>
            <Box>
              <Typography
                sx={{ fontWeight: "bold" }}
                color="primary"
                variant="h4"
              >
                16 +
              </Typography>
              <Typography>Total Service</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Review;
