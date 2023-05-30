import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import { link1, link2, camNombre,
        camImagen, bienvenida }from './Components/Variables.jsx';
import Error404 from './Components/Error404';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <div>
      <BrowserRouter>
      <Header enviosLogo={link1} enviosTel={"43104649"} enviosTitulo={"Envíos a domicilio sin cargo!"} logWA={link2} numWA={"098798489"}/>
      <NavBar cantidad={4} nombre={camNombre} imagen={camImagen}  />
      <Routes>
      <Route path={"/"} element={<ItemListContainer greeting={bienvenida} />} />
      <Route path={"/category/:categoryId"} element={<ItemListContainer />} />
      <Route path={"/item/:id"} element={<ItemDetailContainer />} />
      <Route path={"/*"} element={<Error404 />} />
      </Routes>
      <Main />
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
