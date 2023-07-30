import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Section from './Components/Section';
import Footer from './Components/Footer';
import Card from './Components/Card';
import { useState } from 'react';


function App() {

  const [counter, Setcounter] = useState(0);

  return (
    <div className="App">
       
  <Navbar counter = {counter} Setcounter = {Setcounter}/>
  <Header />
  <Section counter = {counter} Setcounter = {Setcounter}/>
  <Footer/>
    </div>
  );
}

export default App;