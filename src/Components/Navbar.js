
import './Navbar.css'
import Card from './Card';
import { useState } from 'react';
import App from '../App';

const Navbar  = (props)=>{

  const {counter}= props;


    return (
       
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <a className="navbar-brand" href="#" id="navbar-start">
             <b>Start Bootstrap</b>
            </a>

            <button id="navbarNav" className="navbar-toggler" type="button" data-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" ></span>
            </button>
            
            <div className="collapse navbar-collapse navbar-nav-scroll" >

            <ul className="navbar-nav me-auto ">

            <li className="nav-item active">
             <a className="nav-link" href="#"><b>Home</b></a>
            </li>

            <li className="nav-item">
            <a className="nav-link" href="#">About</a>
            </li>

            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Stores
             </a>
             <ul className="dropdown-menu">
             <li><a className="dropdown-item" href="#">Action</a></li>
             </ul>
             
            </li>
            
    </ul> 
    
    <div id='btn'>
    <button class="btn btn-sm btn-outline-dark"  type="button"> 
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgOV4VaRCekJshpiqupuO5PJFvPODOAlZ778Tzo_gnQA&s' id='cartimage' ></img>
    Cart {counter}</button>
  </div>
     
  
</div>
  
 </nav>
      
    )
}

export default Navbar;