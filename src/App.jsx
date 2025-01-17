
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MeteoNavbar from './components/MeteoNavbar';
import MeteoHome from './components/MeteoHome';
import MeteoFooter from './components/MeteoFooter.Jsx';


function App() {
  return (
    <>
      <MeteoNavbar />
      <MeteoHome />
      <MeteoFooter />
    </>
  );
}

export default App;
