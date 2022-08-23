import './App.css';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className='container'>
      <header className='row bg-dark d-flex justify-content-around'>
        <NavBar />
      </header>
      <h1 className='text-center mt-4 shadow text-info'>Bienvenido a la tienda de Finca El Boleado!!</h1>
    </div>
  );
}

export default App;
