import './App.css'
import Catalogo from './components/Catalogo/Catalogo';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Nosotros from './components/Nosotros/Nosotros';

function App() {

  return (
    <>
      <Nav />
      <Header />
      <Catalogo />
      <Nosotros />
      <Footer />  
    </>
  )
}

export default App
