import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StoreProvider } from "./store/index";
import "./App.sass";
import Application from "./components";
import Main from "./components/Main";

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <Router>
          <Route exact path="/" component={Main} />
          <Route path="/:space/:chat" component={Application} />
        </Router>
      </div>
    </StoreProvider>
  );
}

export default App;
