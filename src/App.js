import logo from './assets/img/logo.svg' 
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Homepage/NavBar";
import { Banner } from "./components/Homepage/Banner";
import { Skills } from "./components/Homepage/Skills";
import { Projects } from "./components/Homepage/Projects";
import { Contact } from "./components/Homepage/Contact";
import { Footer } from "./components/Homepage/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
