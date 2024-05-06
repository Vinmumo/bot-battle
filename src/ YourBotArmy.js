import "./botcollection.css";
// import { NavLink } from "react-router-dom"

// import { useEffect, useState } from "react";
function YourBotArmy ({army}){

    if (army.length === 0) {
        return <div className="botarm"></div>; 
    }
function handleRemove(id){
//     fetch(`http://localhost:3000/army/${id}`, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         }
//     })
//    .then(response => response.json())
console.log(id)
}

const newArmy = army.map(arm=> {
    return <div className="card" style={{width: "18rem"}} key={arm.id} onClick={handleRemove(arm.id)}>
            <img src={arm.avatar_url} className="card-img-top" alt={arm.name} />
            <div className="card-body">
                <h5 className="card-title">{arm.name}</h5>
                <p className="card-text">{arm.catchphrase}</p>
                <button className="btn btn-primary" href>Go somewhere</button>
            </div>
        </div>
})
   
    return (
        <div className="botarm">
 
        {newArmy}
        </div>
    )
}

export default YourBotArmy;
//  {/* <div className="card" style={{width: "18rem"}} key={army.id} >
//             <img src={army.avatar_url} className="card-img-top" alt={army.name} />
//             <div className="card-body">
//                 <h5 className="card-title">{army.name}</h5>
//                 <p className="card-text">{army.catchphrase}</p>
//                 <button className="btn btn-primary">Go somewhere</button>
//             </div>
//         </div> */}