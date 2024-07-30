import logo from './logo.svg';
import './App.css';
import PageTitle from './componnents/PageTitle';
import Logo from './componnents/Logo/Logo';
import Menu from './componnents/Menu/Menu';
import Titre from './componnents/Titre/Titre';


function App() {

  // const tabNoms = [
  //   "Franck",
  //   "Albert",
  //   "Sophie"
  // ]

  // let authorName = '';

  // let i = 0;
  // let id = window.setInterval(() => {
  //   authorName = tabNoms[i];
  //   i++;
  //   if(i > 2) {
  //     i = 0;
  //   }
  //   console.log(authorName);
  // }, 1000)
  // console.log(id)




  // // dans le return ci dessous
  // // l'ossature (squelette) du composant
  // // en HTML



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
        
// {/* <PageTitle tuyauAuthorName={authorName} />

// <img src={logo} className="App-logo" alt="logo"/>
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p> */}

export default App;
