import React from "react";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
return(
   <>
   <div>logo</div>
    <ul>
        
        <li><a>inicio</a></li>
        <li><a>Televisores</a></li>
        <li><a>Celulares</a></li>
        <li><a>Aires</a></li>
        <li><a>Superoofertas</a></li>
       
    </ul>
    <CartWidget/>
    </>
)
}


export default NavBar;