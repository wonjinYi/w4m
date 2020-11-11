import React from "react";
import { HashRouter, Route } from "react-router-dom";
import './App.css';

import Main from "./routes/Main";
import WriteIssue from "./routes/WriteIssue";

function App() {
  return (
    <div className="App">
		<HashRouter>
			<Route path="/" exact={true} component={Main} />
			<Route path="/write" exact={true} component={WriteIssue} />
		</HashRouter>
    </div>
  );
}

export default App;
