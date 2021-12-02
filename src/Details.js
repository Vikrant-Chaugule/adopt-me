import { Component } from "react";
import { withRouter } from "react-router";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
    const res = await fetch(
      `https://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
    );
    const json = await res.json();
    this.setState(
      Object.assign(
        {
          isLoading: false,
        },
        json.pets[0]
      )
    );
  }

  render() {
    if (this.state.isLoading) return <h2>Loading...</h2>;
    const { animal, breed, city, state, description, name } = this.state;
    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

// withRouter is a higher order component that wraps the Details component
export default withRouter(Details);
