import React from "react";
import "../Styles/Loading.css"
//import loadingdog from "../img/chef.gif"
import Navbar from "./Navbar";


export default function Loading({setLoading}){
    return(
    // <div >
    //     <img  src={loadingdog} alt="Imagen no encontrada"/>
    //     <div>
    //          {
    //              setTimeout(() =>{
    //                  setLoading(false)
    //              }, 5000)
    //          }
    //      </div>
    // </div>
 <div className="genera" >
   <div className= "loader">
    {/* <span>Loading...</span>
            {
                setTimeout(() =>{
                 setLoading(false)
                 }, 5000)
             } */}
            
    </div>
  </div>
    
    )
}