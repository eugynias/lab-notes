import React, { useState, useCallback } from "react";
import {withRouter} from "react-router-dom";
import config from "./firebase";
import Register from "./Register";
import "./Home.css";
import image from "./images/notes.svg"


function Home ({history}){

  const handleLogin = useCallback (//Ejecuta esto si hubo un cambio si no no lo hagas by Frank
    async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await config
              .auth()
              .signInWithEmailAndPassword (email.value, password.value);
              email.value ="";
              password.value = "";
              history.push ("/App");
          } catch (error) {
            alert (error);//ya no usar alertssss segun franki
          }
       },
       [history]// Guarda el history 
   );

    return(
    
      
        <div className="noteslogin">
          <div>
          <h1>Bienvenidos</h1>
          <img className="imagelogo" src={image}/>
          </div>
          <form  onSubmit= {handleLogin}>
             
             
               <input name="email" type="email" placeholder="Email" /><br></br><br></br>
          
            
               <input name="password" type ="password" placeholder ="Password" /><br></br><br></br>
             
               <button className="buttlogin" type ="submit"> LOGIN </button><br></br>
          </form>
             
             <div className="buttons">
             <button className="buttonReg" onClick={() => history.push("/Register")}>Registrarse</button>
             </div>

        </div>
 

    );
};
export default Home;