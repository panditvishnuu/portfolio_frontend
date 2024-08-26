import {About, Footer, Header, Skills, Testimonials, Work} from "./container/AllFiles";
import {Navbar} from './components/AllFiles';
import './App.scss'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
