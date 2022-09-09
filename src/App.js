import './App.css';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className='container'>
      
      
          <Router>
              <NavBar />
            <main>
            <Routes>
              <Route exact path='/' element={<ItemListContainer />} />
              <Route exact path='/category/:id' element={<ItemListContainer />} />
              <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            </Routes>
              
              
            </main>
          </Router>
 

      
     
      
    </div>
  );
}

export default App;
