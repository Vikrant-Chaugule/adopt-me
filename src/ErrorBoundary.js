import { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // log error to an error logging service like Azure Monitor, Sentry, etc.
    console.log("Error boundary caught an error ", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          This listing is not available at the moment.
          <Link to="/">Click here </Link>to go back to the home page or wait 5
          seconds.
        </h2>
      );
    }
    // Children are only rendered if there is no error
    return this.props.children;
  }
}

export default ErrorBoundary;
