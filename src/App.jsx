import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/components/Header/Header.jsx';
import Home from './assets/components/Home/Home.jsx';
import CardComponent from './assets/components/Card/Card.jsx';
import SkillsSection from './assets/components/Skill/Skill.jsx';
import EducationSection from './assets/components/Estudios/Estudios.jsx';
import ContactSection from './assets/components/Contacto/Contacto.jsx';
import Footer from './assets/components/Footer/Footer.jsx';


function App() {


  return (
    <div className="App">
      <Header/>
      <div className='content'>
        <Home/>
      </div>
      <div id='card'>
        <CardComponent/>
      </div>
      <div id='skill'>
        <SkillsSection/>
      </div>
      <div id='educacion'>
        <EducationSection/>
      </div>
      <div id='contacto'>
        <ContactSection/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>

  )
}

export default App
