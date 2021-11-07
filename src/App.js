import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home/Home";

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
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
