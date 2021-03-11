import {Switch, Route} from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';

import './App.css';

import Header from './components/Header';
import Home from './pages/Home';
import ReturnInicio from './components/ReturnInicio'
import Capilla from './pages/Capilla';
import Fundadora from './pages/Fundadora'
import Footer from './components/Footer';
import Carisma from './pages/Carisma';
import Canonizacion from './pages/Canonizacion';
import Contacto from './pages/Contacto';
import Videos from './pages/Videos';


function App() {

  function bounce(val) {
    return spring(val, {
      stiffness: 400,
      damping: 40,
    });
  }
  
  const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
      opacity: 2,
      scale: 1.4,
    },
    // leave in a transparent, downscaled state
    atLeave: {
      opacity: bounce(0),
      scale: bounce(0.8),
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
      opacity: bounce(2),
      scale: bounce(2),
    },
  };


  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path ="/iglesiacarmen/" component={ReturnInicio} />
          <Route exact path="/iglesiacarmen/inicio" component={Home}/>
          <Route exact path="/iglesiacarmen/fundadora" component={Fundadora} />
          <Route exact path="/iglesiacarmen/capilla" component={Capilla}/>
          <Route exact path="/iglesiacarmen/carisma-y-espiritualidad" component={Carisma}/>
          <Route exact path="/iglesiacarmen/causa-de-canonizacion" component={Canonizacion}/>
          <Route exact path="/iglesiacarmen/contacto" component={Contacto}/>
          <Route exact path="/iglesiacarmen/videos" component={Videos} />
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
