import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemCount from './components/ItemCount/itemCount.js';

function App() {
  return (
    <div className="App">
    <NavBar/> 
    <ItemListContainer gretting={'Bienvenido'}/>
    <ItemCount initial ={1} stock={10} onAdd={(quantity) => console.log ('Cantidad agregada', quantity)}/>
    </div>
  );
}

export default App;
