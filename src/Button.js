import React from "react";

function Button({clickHandler, isDrawing}){
    return(
        // insert here a ternary operator
        
        <button className="start-button"
                onClick={() => clickHandler()}> 
            {isDrawing ? "Click here to stop": "Click here to start"}
        </button>
    );
}

export default Button;