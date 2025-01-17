import { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class MeteoCard extends Component {
  state = {
    meteoData: {},
  };

  getMeteoData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${this.props.meteoPaese}&appid=f4c926cf8e1feda037e5a6373866eb28`
      );
      if (response.ok) {
        const data = await response.json();
        console.log('dati da API', data); 
        this.setState({ meteoData: data }); 
      } else {
        throw new Error('Errore nella chiamata');
      }
    } catch (error) {
      console.log('ERROR', error);
    }
  };

  componentDidMount() {
    this.getMeteoData(); 
  }

  componentDidUpdate(prevProps) {
  
    if (prevProps.meteoPaese !== this.props.meteoPaese) {
      this.getMeteoData();
    }
  }

  render() {
    const { meteoData } = this.state;

    return (
      <Card>
        <Card.Body>
          {meteoData.name ? (
            <>
              <Card.Title class>
                {meteoData.name}, {meteoData.sys?.country}
              </Card.Title>
              <Card.Text>
                <strong className=" text-primary">Temperatura:</strong> {meteoData.main?.temp}°C
              </Card.Text>
              <Card.Text>
                <strong className="text-primary">Condizione:</strong> {meteoData.weather?.[0]?.description}
              </Card.Text>
            </>
          ) : (
            <Card.Text>Caricamento dati...</Card.Text>
          )}
          <Button variant="primary">Info</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default MeteoCard;
