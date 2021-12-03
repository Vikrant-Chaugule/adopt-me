import { Component } from "react";

class Carousel extends Component {
  state = {
    activeIndex: 0,
  };

  // if no props are passed in, we will use the default props
  // commenting this as ErrorBoundary is taking care of this
  // static defaultProps = {
  //   images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  // };

  handleIndexClick = (event) => {
    // data-index is the index of the image in the array which is accessed as index from dataset
    // data-whatever is accessed as dataset.whatever
    this.setState({ activeIndex: parseInt(event.target.dataset.index) });
    // this index need to be parsed to an integer
  };

  render() {
    const { activeIndex } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[activeIndex]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((image, index) => (
            // eslint-disable-next-line
            <img
              key={index}
              src={image}
              alt="animal thumbnail"
              className={index === activeIndex ? "active" : ""}
              data-index={index}
              onClick={this.handleIndexClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
