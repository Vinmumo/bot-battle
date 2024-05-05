// import logo from './logo.svg';
// import { useEffect } from 'react';
import './App.css';
import BotCollection from './BotCollection';
import YourBotArmy from './ YourBotArmy';
import { useEffect, useState } from "react";
import { GetBots,GetArmy } from "./utilities";

function App() {

  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);


  useEffect(() => {
      GetBots().then(data => {
          setBots(data);
      });
  }, []);

  useEffect(() => {
    GetArmy().then(data => {
        setArmy(data);
    });
}, []);


  return (
 <>
 <YourBotArmy army={army}/>
<BotCollection bots={bots} />
  
 </>
  )
}

export default App;
