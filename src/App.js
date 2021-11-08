import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import Home from "./Pages/Home/Home/Home";
import LogIn from "./Pages/LogIn/LogIn/LogIn";
import Register from "./Pages/LogIn/Register/Register";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F63E7B",
    },
    secondary: {
      main: "#FFEAF3",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/dashboard">
              <DashboardHome></DashboardHome>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
