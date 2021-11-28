import { StrictMode } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Router>
        <Switch>
          <Route path="/details/:id" component={Details} exact />
        </Switch>
        <Route path="/" component={SearchParams} exact />
      </Router>
    </div>
  );
};

// tell React, where to render this component
// ReactDOM.render(React.createElement(App), document.getElementById("root"));

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
