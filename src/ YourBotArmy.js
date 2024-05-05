import "./botcollection.css";
// import { useEffect, useState } from "react";
function YourBotArmy ({army}){

    if (army.length === 0) {
        return <div className="botarm"></div>; 
    }

   
    return (
        <div className="botarm">
  <div className="card" style={{width: "18rem"}} key={army.id} >
            <img src={army.avatar_url} className="card-img-top" alt={army.name} />
            <div className="card-body">
                <h5 className="card-title">{army.name}</h5>
                <p className="card-text">{army.catchphrase}</p>
                <button className="btn btn-primary">Go somewhere</button>
            </div>
        </div>
        </div>
    )
}

export default YourBotArmy;