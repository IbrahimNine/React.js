import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav, Card, Row, Col } from "react-bootstrap";

function App() {
  // Styles for the background image
  const backgroundStyles = {
    backgroundImage: 'url("/background-img.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };
  return (
    /* <></> is React fragment it's a way to group multiple elements
     without introducing an additional parent element in the DOM. */
    <>
      <div className="App" style={backgroundStyles}>
        {/* Navbar */}
        <Navbar
          className="navbar-dark"
          style={{ background: "rgba(0, 0, 0, 0.8)" }}
        >
          <Container className="d-flex justify-content-between align-items-center">
            <Navbar.Brand href="#">Your Catalogue App</Navbar.Brand>
            <Nav>
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Main Content */}
        <Container
          className="mt-5 text-white p-3"
          style={{ background: "rgba(0, 0, 0, 0.8)" }}
        >
          <h2>Welcome to Your Catalogue App</h2>
          <br />
          <h5>Please choose your genre: </h5>

          {/* Cards */}
          <Row className="mt-4">
            <Col xs={4}>
              <Card className="bg-dark text-white mx-4">
                <Card.Img
                  variant="top"
                  src="/firstCardImg.jpg"
                  alt="Card Image"
                />
                <Card.Body>
                  <Card.Title>Classical and Traditional</Card.Title>
                  <Card.Text>
                    This category includes classical music, which encompasses
                    various periods like Baroque, Classical, Romantic, and
                    Contemporary classical music.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4}>
              <Card className="bg-dark text-white mx-4">
                <Card.Img
                  variant="top"
                  src="/secondCardImg.jpg"
                  alt="Card Image"
                />
                <Card.Body>
                  <Card.Title>Popular and Contemporary</Card.Title>
                  <Card.Text>
                    This category covers a wide range of popular and
                    contemporary music genres. It includes genres like pop,
                    rock, hip-hop, R&B, electronic, country, jazz, and more.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4}>
              <Card className="bg-dark text-white mx-4">
                <Card.Img
                  variant="top"
                  src="/thirdCardImg.jpg"
                  alt="Card Image"
                />
                <Card.Body>
                  <Card.Title>World and Fusion</Card.Title>
                  <Card.Text>
                    This category encompasses genres that draw inspiration from
                    various cultural traditions and fuse different musical
                    elements. World music incorporates styles from around the
                    globe, while fusion genres blend multiple influences.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* footer */}
        <footer
          className=" text-light text-center fixed-bottom"
          style={{ background: "rgba(0, 0, 0, 0.8)" }}
        >
          <p>&copy; All Rights Reserved. Your Catalogue App 2023</p>
        </footer>
      </div>
    </>
  );
}

export default App;
