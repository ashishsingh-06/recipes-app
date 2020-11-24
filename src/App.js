import logo from './logo.svg';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import {useEffect} from 'react';
import Context from './Context';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Details from './components/Details';
import Footer from './components/Footer';
import Default from './components/Default';
import AOS from 'aos';
import "aos/dist/aos.css";


function App() {

  useEffect(()=>{
    AOS.init({});
  },[])

  const stop = true;

  return (
    <>
      <Navbar></Navbar>
      <Context>
      <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/details' component={Details}></Route>
          <Route component={Default}></Route>
      </Switch>
      </Context>
      <Footer></Footer>
    </>
  );
}

export default App;
