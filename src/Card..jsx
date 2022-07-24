import React from "react";
import "../src/card.css";


import {Link} from "react-router-dom";
export default function Card({name,no,director,image,id}){
    return (
        
            
            
        <div className='card' key={no}>
        
        <table  className="table"  >
            <tr>
            <th rowSpan={2} ><img src={image} height="100px" width="50px"  alt="banner"/></th>
            <th>Film Name</th><th>Director</th>
            <th rowSpan={2}><button className="button"><Link to={"/details/"+id}>View Details</Link></button></th>
            </tr>
            <tr><td>{name}</td><td>{director}</td></tr>
        </table>
        
        
        </div>
    
    
    );    
}