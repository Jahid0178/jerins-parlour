import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <Box style={{ background: "#F63E7B" }} sx={{ py: 5 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3}>
            <Box sx={{ color: "#fff" }}>
              <Typography variant="body1">
                H#000(0th Floor), Road #00,
              </Typography>
              <Typography>New DOHS, Mohakhali, Dhaka, Bangladesh</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Typography variant="h5" sx={{ color: "#fff" }}>
              Company
            </Typography>
            <ul>
              <li>
                <Link className="footer-link" to="#">
                  About
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Project
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Our Team
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Terms Conditions
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Submit Listing
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Typography variant="h5" sx={{ color: "#fff" }}>
              Quick Links
            </Typography>
            <ul>
              <li>
                <Link className="footer-link" to="#">
                  Quick Links
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Rentals
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Sales
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="#">
                  Our Blog
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Typography variant="h5" sx={{ color: "#fff" }}>
              About us
            </Typography>
            <Typography sx={{ color: "#ccc" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt, repudiandae.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
