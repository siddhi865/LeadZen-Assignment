import React,{useEffect, useState} from "react";
import { Link,useParams } from "react-router-dom";
export default function Details(){
    const {handle}=useParams();
    const [film,setFilm]=useState({});
    useEffect(()=>{
        const getFilmDetails=async ()=>{
            const res=await fetch("https://ghibliapi.herokuapp.com/films/"+handle);
            const data= await res.json();
            setFilm(data);
            
        }
        getFilmDetails();
        
    },[])
    
    return(
        
        <>
        <div className="details">
        <button className="button"><Link to="/">back</Link></button>
        
            <table width="1000px" cellPadding={1} cellSpacing={1} align="center">
                <tr>
                    <td rowSpan={5}><img src={film.image} align="middle" alt="banner" height="500px" width="400px"/></td>
                    <td><b>Title :</b> <br/>{film.title}</td>
                </tr>
                <tr>
                   
                    <td><b>Description :</b><br/>{film.description}</td>
                </tr>
                <tr>
                   
                    <td><b>Producer :</b><br/>{film.producer}</td>
                </tr>
                <tr>
                   
                    <td><b>Director :</b><br/>{film.director}</td>
                </tr>
                <tr>
                   
                    <td><b>Release Date :</b><br/>{film.release_date}</td>
                </tr>
            </table>
        
        </div>
        </>
       
    );
}