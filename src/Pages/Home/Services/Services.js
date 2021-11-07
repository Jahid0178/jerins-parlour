import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import faceTreatment from "../../../images/face-treatment.png";
import hairColor from "../../../images/hair-color.png";
import skinCare from "../../../images/skin-care.png";
import Service from "../Service/Service";

const services = [
  {
    img: faceTreatment,
    name: "Anti Age Face Treatment",
    price: 199,
    desc: "We craft stunning and amazing web UI. using a well dratted UX to fit your product",
  },
  {
    img: hairColor,
    name: "Hair Color And Styleing",
    price: 99,
    desc: "We craft stunning and amazing web UI. using a well dratted UX to fit your product",
  },
  {
    img: skinCare,
    name: "Skin Care Treatment",
    price: 299,
    desc: "We craft stunning and amazing web UI. using a well dratted UX to fit your product",
  },
];

const Services = () => {
  return (
    <Container>
      <Typography
        variant="h4"
        sx={{ fontWeight: 500, textAlign: "center", mt: 3 }}
      >
        Our Awesome Services
      </Typography>
      <Grid container spacing={2}>
        {services.map((service) => (
          <Service service={service} key={service.name}></Service>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
