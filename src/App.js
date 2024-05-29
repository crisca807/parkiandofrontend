import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Register } from "./components/Homepage/Register.js"
import { UserRegister } from "./components/Homepage/UserRegister.js";


// Importaciones de componentes


function App() {
  return (
    <div className="App">
      { 
      <UserRegister />
     }
      
    </div>
  );
}

export default App;
