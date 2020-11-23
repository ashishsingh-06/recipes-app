import logo from './logo.svg';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Default from './components/Default';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;
