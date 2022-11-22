import MyForm from './components/MyForm'
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{name: 'Josias', email: 'josias@gmail.com', bio:'Sou um advogado', role:'Sou um Admin'}} />
    </div>
  );
}

export default App;
