import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const alignment = {
  display: "flex",
  justifyContent: "center",
};

const Register = () => {
  return (
    <Container>
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <Typography variant="h5" sx={{ fontWeight: 500 }}>
          Create an account
        </Typography>
        <Box style={alignment}>
          <Box sx={{ width: "50%" }}>
            <TextField
              sx={{ width: "60%", mt: 1 }}
              id="standard-basic"
              label="First Name"
              variant="standard"
            />
            <TextField
              sx={{ width: "60%", mt: 1 }}
              id="standard-basic"
              label="Last Name"
              variant="standard"
            />
            <TextField
              sx={{ width: "60%", mt: 1 }}
              id="standard-basic"
              label="Email"
              variant="standard"
            />
            <TextField
              sx={{ width: "60%", mt: 1 }}
              id="standard-basic"
              label="Password"
              variant="standard"
            />
            <TextField
              sx={{ width: "60%", mt: 1 }}
              id="standard-basic"
              label="Confirm Password"
              variant="standard"
            />
            <Button sx={{ width: "60%", my: 2 }} variant="contained">
              Create an account
            </Button>
            <br />
            <Link to="/login" style={{ textDecoration: "none" }}>
              <Button sx={{ width: "60%" }}>Already have an account?</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
