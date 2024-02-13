import './App.css'
import Contenedor from './components/Contenedor/Contenedor'
import NavBar from './components/Nav.Bar/Nav.Bar'

function App() {
  return (
    <>
    <NavBar/>
    <Contenedor producto={"Anafe"}/>
    <Contenedor producto={"Aspiradora"}/>
    <Contenedor producto={"Cocina"}/>
    </>
    )
    

}

export default App
