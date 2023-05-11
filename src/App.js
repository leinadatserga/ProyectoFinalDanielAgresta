import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import CartWidget from './Components/CartWidget';
import {dimension1,dimension2,
        link1,link2,listado,
        camaras,carrito, bienvenida
}from './Components/Variables.js';



function App() {
  return (
    <div>
      <Header enviosLogo={link1} enviosTel={"43104649"} enviosTitulo={"Envíos a domicilio sin cargo!"} logWA={link2} numWA={"098798489"}/>
      <NavBar cantidad={carrito} productos={listado} detalle={camaras} />
      <ItemListContainer saludo={bienvenida} />
      <Main carta={dimension2}/>
      <Footer />
    </div>
  )
}

export default App;
