// import logo from './logo.svg';
// import { useEffect } from 'react';
import './App.css';
import BotCollection from './BotCollection';
import YourBotArmy from './ YourBotArmy';
import { useEffect, useState } from "react";
import { GetBots } from "./utilities";
// import BotData from './botData';

function App() {

  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);


  useEffect(() => {
      GetBots().then(data => {
          setBots(data);
      });
  }, []);


  useEffect(() => {
    fetch("http://localhost:3000/army",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(response => response.json())
    .then(data => {
        setArmy(data);
    });
}, []);

  // function updateBots(bot) {
  //   // POST request to add the new bot to army endpoint
  //   fetch("http://localhost:3000/army", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(bot)
  //   })
  //   .then(response => response.json())
  //   .then(() => {
  //     // Fetch the updated army data after adding the new bot
  //     fetch("http://localhost:3000/army")
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log("Bot added successfully!");
  //         // Update the army state with the fetched data
  //         setArmy(data);
  //       })
  //       .catch(error => {
  //         console.error("Error fetching updated army:", error);
  //       });
  //   })
  //   .catch(error => {
  //     console.error("Error adding bot:", error);
  //   });
  // }
  return (
 <>
 <YourBotArmy army={army} />
<BotCollection bots={bots} />
  {/* <BotData  updateBots={updateBots}/> */}
 </>
  )
}




export default App;
