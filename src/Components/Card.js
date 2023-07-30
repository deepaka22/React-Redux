
import { useState } from 'react';
import './Card.css'
import App from '../App';
const Card = (props)=>{

    const {name, price, stars, dummyprice, position, counter, Setcounter}= props;

    const [cart, Setcart]= useState('Add to cart')


    console.log(cart);
    
  
    
const cartHandler = (carting)=>{

    //   {cart == 'Add to cart' ?  Setcart('Added to cart') : Setcart('Add to Cart')};

{ (cart == 'Add to cart') ? Setcart('Added to cart') : Setcart('Add to cart')};
      {(cart == 'Added to cart') ? Setcounter(counter - 1) : Setcounter(counter + 1) };
     
     

    }

    const styles = 
        {color: (cart == 'Added to cart') ? 'red' : 'black',
    bacgroundcolor : 'black' }
    

    return (
<div  class=" cards " id='card-eight'>

<div class="badge bg-dark text-white" id='badge'>{position}</div>
  <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="Card image cap" id="picsize"/>

  <div class="card-body" id='spacing-body'>

    <h5 class="card-title" id='spacing-body'><b>{name}</b></h5>
    


    { name !== "Fancy Product" && name !==  "Sale Item" ? <h4 id='spacing-bodys'> 

    <div id='stars'>
    <img src={stars} id="stars"></img> 
    <img src={stars} id="stars"></img> 
    <img src={stars} id="stars"></img> 
    <img src={stars} id="stars"></img> 
    <img src={stars} id="stars"></img> 
    </div> 
    </h4> : <h4>&nbsp;</h4>}

    <p class="card-text" id='spacing-bodys'> <span id='strikeprice'>{dummyprice} </span>&nbsp;{price}</p>

  </div>

  <div  id='btn-bodys'>

  {name == "Fancy Product" ? <button type="button" class="btn btn-outline-dark align-self-end">View Option</button>:
  <button type="button" style={styles} onClick = {cartHandler} class="btn btn-outline-dark">{cart}</button> }
  
  </div>
</div>  
     
    )
}

export default Card;