import logo from './logo.svg';
import './App.css';
import Menu from './componnents/Menu/Index';
import Titre from './componnents/Titre/Index';
import Logo from './componnents/Logo/Index';

function App() {

  return (
    <div id='app-container' className="App">
      <header className="container-struct">
        <div className='menu-rep'>
          <div className='left-menu'>
            <Logo/>
            <Titre/> 
          </div>
          <Menu/>
        </div>
      </header>
    </div>
  );
}

export default App;
