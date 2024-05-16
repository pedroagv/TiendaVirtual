import Carousel from 'react-bootstrap/Carousel';

function CarouselVariable() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.slidesdocs.com/responsive-images/background/animated-birthday-decoration-animation-stock-video-footage-with-many-balloons-powerpoint-background_aa3aa47419__960_540.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.slidesdocs.com/responsive-images/background/interior-d%C3%A9cor-arch-balloons-present-box-and-podium-on-display-in-a-3d-rendered-wall-scene-powerpoint-background_850f8c3d30__960_540.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://image.slidesdocs.com/responsive-images/background/welcome-to-the-party-blue-themed-3d-rendering-of-birthday-decorations-on-wall-with-balloons-and-gifts-powerpoint-background_a59d2a2a15__960_540.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselVariable;