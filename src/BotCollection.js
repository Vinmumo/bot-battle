import { useState } from "react";
import "./botcollection.css";
// import { addBot } from "./utilities";

function BotCollection({ bots }) {
    const [addedBots, setAddedBots] = useState([]);

    function addBot(bot) {
        return fetch("http://localhost:3000/army", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bot)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert(`${bot.name} added successfully!`);
            setAddedBots(prevBots => [...prevBots, bot.id]);
        })
        .catch(error => {
            console.error("Error adding bot:", error);
        });
    }

    function handleClick(bot) {
        if (!addedBots.includes(bot.id)) { 
            console.log(bot);
            addBot(bot);
        } else {
            alert(`${bot.name} is already added!`);
        }
    }

    const displayBots = bots.map(bot => (
        <div className="card" style={{ width: "18rem" }} key={bot.id} >
            <img src={bot.avatar_url} className="card-img-top" alt={bot.name} onClick={() => handleClick(bot)} />
            <div className="card-body">
                <h5 className="card-title">{bot.name}</h5>
                <p className="card-text">{bot.catchphrase}</p>
                <button className="btn btn-primary">Go somewhere</button>
            </div>
        </div>
    ));

    return (
        <div className="bot-collection">
            {displayBots}
        </div>
    );
}

export default BotCollection;
