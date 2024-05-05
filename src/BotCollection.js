
import "./botcollection.css";
// import { addBot } from "./utilities";

function BotCollection({bots, updateBots}) {

   

    function handleClick(bot) {
        // console.log(bot);
        // addBot(bot);
      updateBots(bot);
        
    }


   
    const displayBots = bots.map(bot => (
        <div className="card" style={{width: "18rem"}} key={bot.id} >
            <img src={bot.avatar_url} className="card-img-top" alt={bot.name} onClick={() => handleClick(bot)}/>
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
