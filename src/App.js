import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("black");

  return (
    // anything wrapped inside context provider will have access to the value e.g. theme
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id" component={Details} exact />
          </Switch>
          <Route path="/" component={SearchParams} exact />
        </Router>
      </div>
    </ThemeContext.Provider>
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
