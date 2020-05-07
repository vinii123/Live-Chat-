import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Join from "./Component/Join/Join";
import Chat from "./Component/Chat/Chat";

const App = () => {
  return(<Router>
    <Route path="/" exact component={Join} />
    <Route path="/chat" exact component={Chat} />
  </Router>);
}

export default App;
