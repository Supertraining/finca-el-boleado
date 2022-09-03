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
      <ItemCounter stock = '10'/>
      <main>
        <ItemListContainer />
      </main>
      
    </div>
  );
}

export default App;
