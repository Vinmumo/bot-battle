import { NavLink } from "react-router-dom"
import "./botcollection.css";


function BotCollection({bots}) {

   

   


   
    const displayBots = bots.map(bot => (
        <div className="card" style={{width: "18rem"}} key={bot.id} >
            <img src={bot.avatar_url} className="card-img-top" alt={bot.name} />
            <div className="card-body">
                <h5 className="card-title">{bot.name}</h5>
                <p className="card-text">{bot.catchphrase}</p>
                <NavLink className="btn btn-primary btn-sm mx-2" to={`/botData/${bot.id}`}>
                        View
                    </NavLink>
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
