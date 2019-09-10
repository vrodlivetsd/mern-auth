import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Navbar, Landing } from "./components/layout/index";
import { Login, Register } from "./components/auth/index";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
export default App;
