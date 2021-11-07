import { Button, CardMedia, Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Service = (props) => {
  const { name, img, desc, price } = props.service;
  return (
    <>
      <Grid item xs={12} sm={12} md={4} sx={{ my: 4 }}>
        <Paper style={{ textAlign: "center" }} sx={{ px: 2, py: 3 }}>
          <CardMedia
            style={{ width: "60px", margin: "auto" }}
            component="img"
            image={img}
            alt="green iguana"
          />
          <Typography variant="h6" sx={{ my: 1 }}>
            {name}
          </Typography>
          <Typography variant="h6" color="primary">
            $ {price}
          </Typography>
          <Typography variant="body1">{desc}</Typography>
          <Button sx={{ mt: 2 }} variant="contained">
            Explore More
          </Button>
        </Paper>
      </Grid>
    </>
  );
};

export default Service;
