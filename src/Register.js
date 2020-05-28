import React, { useCallback } from "react";
import { withRouter } from "react-router-dom"
import config from "./firebase";
//import Auth from "./Auth";


function Register ({history}) {

    const handleSignUp = useCallback (
        async event => {
            event.preventDefault();
            const { email,password } = event.target.elements;
                try {
                await config
                .auth()
                .createUserWithEmailAndPassword (email.value, password.value);
                history.push("/Home");
                } 
                catch (error) {
                alert (error);
            }     
    }, [history]);


    return (
        <div className = "Register">

            <h1>Register</h1>
            <form onSubmit = {handleSignUp}//
            >
               <label>
                 Email
                  <input name ="email" type ="email" placeholder= "Email" />
               </label>
               <label>
                  Password
                  <input name= "password" type ="password" placeholder ="Password" />
               </label>
               <button  type ="submit" 
               onClick={() => history.push("/Home")}
                >
         Registrarse</button>
            </form>
        </div>
    );
};

export default Register;