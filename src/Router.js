import React,{useState, useEffect }  from "react";
import {HashRouter,
       Switch,Route
    } from "react-router-dom";
import config from "./firebase";
import App from "./App";
import Home from "./Home";
import Register from "./Register";
import {ProtectedRoute} from "./ProtectedRoute";
import Unauthorized from "./Unauthorized";
//import Auth from "./Auth";

function Router({props}){

     const [user,setUser] = useState(null)
    

     useEffect (()=> {
        config.auth().onAuthStateChanged(function(user){
            if (user){
                
              Location.hash = "./App" //React Router para el history.push
              setUser(user)
            }else{
             Location.hash ="./Home"
             setUser(null)
            }
     }); 
    },[]);
    
        return(
            <HashRouter>
            <Switch>
                <Route user={user} setUser={setUser} exact path="/" component ={Home} />
                <ProtectedRoute user={user} exact path="App" component={App} /> } />
                <Route exact path="Register" component={Register} />
            </Switch>
        </HashRouter>

        )
    }

export default Router;