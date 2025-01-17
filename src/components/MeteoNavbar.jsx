import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MeteoNavbar() {
    return (
      <>
        <Navbar bg="primary" data-bs-theme="dark" className="m-0 p-0">
          <Container className="m-2 p-2">
            <Navbar.Brand href="#home" className="p-0">
              <img 
                src="/logombretta1.png" 
                alt="Logo"
                width="230"
                height="100"
                className="d-inline-block align-top m-0 p-0"  // Rimuovi margini e padding
              />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">paesi</Nav.Link>
              <Nav.Link href="#pricing">info</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }

export default MeteoNavbar