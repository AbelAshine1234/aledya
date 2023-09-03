import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;