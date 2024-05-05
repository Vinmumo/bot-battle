// import logo from './logo.svg';
// import { useEffect } from 'react';
import './App.css';
import BotCollection from './BotCollection';
import YourBotArmy from './ YourBotArmy';
import { useEffect, useState } from "react";
import { GetBots } from "./utilities";

function App() {

  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);


  useEffect(() => {
      GetBots().then(data => {
          setBots(data);
      });
  }, []);

// useEffect(() => {
//   fetch("http://localhost:3000/army",{
//     method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify()
//     }).then((response)=>  response.json())
//     .then((data)=> {
//         alert(`transaction with id: ${data.id} added successfully!`)
//     })
// },[]);

 function updateBots(botObj){
  // console.log(botObj);
  setArmy(botObj);
 }

  return (
 <>
 <YourBotArmy army={army} />
<BotCollection bots={bots} updateBots={updateBots}/>
  
 </>
  )
}

export default App;
