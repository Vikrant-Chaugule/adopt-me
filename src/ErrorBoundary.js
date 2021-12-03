import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // log error to an error logging service like Azure Monitor, Sentry, etc.
    console.log("Error boundary caught an error ", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2>
          This listing is not available at the moment.
          <Link to="/">Click here </Link>to go back to the home page
        </h2>
      );
    }
    // Children are only rendered if there is no error
    return this.props.children;
  }
}

export default ErrorBoundary;
