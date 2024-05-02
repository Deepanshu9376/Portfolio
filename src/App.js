// import logo from './logo.svg';
import './App.css';
import { Banner } from './Components/Banner';
import NavBar from './Components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { Experience } from './Components/Experience';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
