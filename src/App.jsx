
import 'bootstrap/dist/css/bootstrap.min.css'
import MeteoNavbar from './components/MeteoNavbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MeteoHome from './components/MeteoHome'
import NotFound from './components/NotFound'
function App() {

  return (
    <>
    <BrowserRouter>
  <MeteoNavbar/>
<Routes>
  <Route path='/home' element={<MeteoHome/>} />
</Routes>
<Route path='*' element={<NotFound/>}/>
  </BrowserRouter>
</>
  )
}

export default App
