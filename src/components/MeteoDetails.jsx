import { Component } from 'react';
import MeteoHome from './MeteoHome';
import MeteoDetails from './MeteoDetails';

class App extends Component {
  state = {
    currentPage: 'home', // Pagina iniziale
    selectedMeteoData: null, // Dati selezionati per i dettagli
  };

  goToDetails = (meteoData) => {
    this.setState({ currentPage: 'details', selectedMeteoData: meteoData });
  };

  goToHome = () => {
    this.setState({ currentPage: 'home', selectedMeteoData: null });
  };

  render() {
    const { currentPage, selectedMeteoData } = this.state;

    return (
      <div>
        {currentPage === 'home' && <MeteoHome onCardClick={this.goToDetails} />}
        {currentPage === 'details' && (
          <MeteoDetails meteoData={selectedMeteoData} goBack={this.goToHome} />
        )}
      </div>
    );
  }
}

export default App;
