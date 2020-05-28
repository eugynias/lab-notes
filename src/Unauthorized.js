import React from "react";
import {Link} from "react-router-dom"

const Unauthorized =()=>{
    return(
        <div>
            <p> "Holaaa no puedes entrar"</p>

            <p> <Link to="/Home">Back to Home</Link></p>
        </div>
    )
}

export default Unauthorized;