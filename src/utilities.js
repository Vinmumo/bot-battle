export function GetBots() {
   return fetch("https://json-fz88.onrender.com/bots",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }
    )
    .then(res => res.json())
}

export function GetArmy() {
    return fetch("https://json-fz88.onrender.com/army",{
         method: "GET",
         headers: {
             "Content-Type": "application/json",
             "Accept": "application/json"
         }
     }
     )
     .then(res => res.json())
 }
 
 export function getBotsById(id){
    return fetch(`https://json-fz88.onrender.com/bots/${id}`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
    }).then(response => response.json())
}

