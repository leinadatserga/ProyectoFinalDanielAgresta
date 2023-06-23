import './App.css';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Footer from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import { link1, link2, bienvenida, categoria, tel1, tel2, titEnvios }from './Components/Variables.jsx';
import Error404 from './Components/Error404';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from './Components/Context/CartContextProvider';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Congrats from './Components/Congrats';




function App() {
  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <Header enviosLogo={ link1 } enviosTel={ tel1 } enviosTitulo={ titEnvios } logWA={ link2 } numWA={ tel2 }/>
          <NavBar />
          <Routes>
            <Route path={ "/" } element={ <ItemListContainer greeting={ bienvenida } /> } />
            <Route path={ "/category/:categoryId" } element={ <ItemListContainer greeting={ categoria } /> } />
            <Route path={ "/item/:id" } element={ <ItemDetailContainer /> } />
            <Route path={ "/cart" } element={ <Cart /> } />
            <Route path={ "/checkout" } element={ <Checkout /> } />
            <Route path={ "/congrats/:id" } element={ <Congrats /> } />
            <Route path={ "/*" } element={ <Error404 /> } />
          </Routes>
          <Main />
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App;
