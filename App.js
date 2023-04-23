import logo from './logo.svg';
import './App.css';
import ContactoListComponent from './Components/Container/contactoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hola desde app</h1>
       <ContactoListComponent></ContactoListComponent>
      </header>
    </div>
  );
}

export default App;
