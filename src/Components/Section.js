import './Section.css'
import App from '../App';
import Card from './Card';

const Section = (props)=>{

const {counter, Setcounter}= props;

  
    
    
    return(
        <div className='container-xxl' id='chumma' >
           
                    
                    <Card name = "Fancy Product" price = "$40.00 - $80.00"/>
                    <Card name = "Special Item" counter = {counter} Setcounter = {Setcounter} position = "sale" dummyprice = "$20.00" price = "$18.00" stars= "https://www.svgrepo.com/download/13695/star.svg"/>
                    <Card name = "Sale Item" counter = {counter} Setcounter = {Setcounter} position = "sale" dummyprice = "$50.00"price = "$25.00"/>
                    <Card name = "Popular Item" counter = {counter} Setcounter = {Setcounter} price = "$40.00" stars= "https://www.svgrepo.com/download/13695/star.svg"/>

                    <Card name = "Sale Item"counter = {counter} Setcounter = {Setcounter} position = "sale" dummyprice = "$50.00"price = "$25.00"/>
                    <Card name = "Fancy Product" price = "$120.00 - $280.00"/>
                    <Card name = "Special Item" counter = {counter} Setcounter = {Setcounter} position = "sale" dummyprice = "$20.00" price = "$18.00" stars= "https://www.svgrepo.com/download/13695/star.svg"/>
                    <Card name = "Popular Item" counter = {counter} Setcounter = {Setcounter} price = "$40.00" stars= "https://www.svgrepo.com/download/13695/star.svg"/>

                    </div>
                  

        

       
    )
}

export default Section;