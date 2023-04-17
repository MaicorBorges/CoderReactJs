import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemCount from './components/ItemCount/itemCount.js';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer/> } />
          <Route path="/category/:categoryId" element={<ItemListContainer/> } />
          <Route path="/element/elementId" element={<ItemDetailContainer/> } />
          <Route path="/*" element={<h1> 404 NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
