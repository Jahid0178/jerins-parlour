import React from "react";
import { Container, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import "./LogIn.css";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const LogIn = () => {
  const { signInWithGoogle } = useAuth();
  const history = useHistory();

  const handleGoogleSignIn = () => {
    signInWithGoogle(history);
  };

  return (
    <Container>
      <Box className="login-container">
        <Box className="inner-content" sx={{ width: "30%" }}>
          <Typography
            variant="h5"
            sx={{ textAlign: "center", mb: 2, fontWeight: 500 }}
          >
            Login with
          </Typography>
          <Box>
            <Button
              sx={{
                width: "100%",
                border: "1px solid #ddd",
                borderRadius: "50px",
                mb: 1,
              }}
              color="primary"
              onClick={handleGoogleSignIn}
            >
              Continue With Google
            </Button>
            <span>Don't have an account?</span>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button>Create an account</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default LogIn;
