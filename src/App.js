import './App.css';
import './components/CartWwidget/Cartwidget.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Navbar from './components/Navbar/NavBar.jsx';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer items={ ['Servicio 1', 'Servicio 2', 'Producto 2', 'Servicio 3'] } onItemSeleccionado={(item) =>  alert(item)} />
    </div>


  );
}

export default App;
