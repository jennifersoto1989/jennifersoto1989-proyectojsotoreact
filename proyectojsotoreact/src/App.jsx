import './App.css'
import Contenedor from './components/Contenedor/Contenedor';
import NavBar from './components/Nav.Bar/Nav.Bar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

  function App() {
      return (
        <>
    <NavBar/>
    
    <Contenedor producto={"Anafe"}/>
    <Contenedor producto={"Aspiradora"}/>
    <Contenedor producto={"Cocina"}/>

    
<ItemListContainer></ItemListContainer> greeting={"Bienvenidos a mi e-commerce"}</>

     
       
  )
}

export default App
