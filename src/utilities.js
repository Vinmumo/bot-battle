export function GetBots() {
   return fetch("http://localhost:3000/bots",{
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
    return fetch("http://localhost:3000/army",{
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
    return fetch(`http://localhost:3000/bots/${id}`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
    }).then(response => response.json())
}

