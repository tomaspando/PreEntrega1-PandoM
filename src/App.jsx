import NavBar from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemById from './components/ItemById/ItemById';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting={"Bienvenidos a la Tienda de Roger"} />}/>
          <Route exact path="/category/:categoryId" element={<ItemDetailContainer/>}/>
          <Route exact path="/item/:id" element={<ItemById/>}/>
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

