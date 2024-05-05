import "./botcollection.css";

function YourBotArmy ({army}){
    const displayArmy = army.map(one => (
        <div className="card" style={{width: "18rem"}} key={one.id} >
            <img src={one.avatar_url} className="card-img-top" alt={one.name} />
            <div className="card-body">
                <h5 className="card-title">{one.name}</h5>
                <p className="card-text">{one.catchphrase}</p>
                <button className="btn btn-primary">Go somewhere</button>
            </div>
        </div>
    ));
    return (
        <div className="botarm">
{displayArmy}
        </div>
    )
}

export default YourBotArmy;