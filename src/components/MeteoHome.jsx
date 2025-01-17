import { Component } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import MeteoCard from "./MeteoCard";

class MeteoHome extends Component {
  state = {
    Paese: "Borore", 
  };

  paeseChange = (e) => {
    this.setState({ Paese: e.target.value }); 
  };

  render() {
    return (
      <Container>
        <Row className=" bg-primary justify-content-center">
          <Col xs={12} md={8}>
            <h1 className=" bg-primary text-center mt-2">Seleziona il tuo paese</h1>
            <Form.Select
              aria-label="Meteo chooser dropdown"
              value={this.state.Paese}
              onChange={this.paeseChange}
            >
              <option>Borore</option>
              <option>Macomer</option>
              <option>Bolotana</option>
              <option>Paulilatino</option>
              <option>Bosa</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="bg-primary justify-content-center mt-3">
          <Col xs={12} md={8}>
            <MeteoCard meteoPaese={this.state.Paese} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MeteoHome;
