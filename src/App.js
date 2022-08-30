import './App.css';
import ItemCounter from './components/ItemCounter';
import ItemListContainer from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className='container'>
      <header className='row bg-dark d-flex justify-content-around'>
        <NavBar />
      </header>
      <ItemListContainer name='Finca El Boleado'>
        <ItemCounter stock = '10'/>
      </ItemListContainer >
    </div>
  );
}

export default App;
