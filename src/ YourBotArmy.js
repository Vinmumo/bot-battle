import React from "react";
import "./botcollection.css";

function YourBotArmy({ army, setArmy }) {
  if (army.length === 0) {
    return <div className="botarm"></div>;
  }

  function handleRemove(id) {
    fetch(`http://localhost:3000/army/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        // Update the state to remove the deleted bot from the army array
        const updatedArmy = army.filter((bot) => bot.id !== id);
        setArmy(updatedArmy);
      })
      .catch((error) => {
        console.error("Error removing bot:", error);
      });
  }

  return (
    <div className="botarm">
      {army.map((arm) => (
        <div className="card" style={{ width: "18rem" }} key={arm.id}>
          <img src={arm.avatar_url} className="card-img-top" alt={arm.name} />
          <div className="card-body">
            <h5 className="card-title">{arm.name}</h5>
            <p className="card-text">{arm.catchphrase}</p>
            {/* Pass the bot's id to handleRemove function */}
            <button className="btn btn-primary" onClick={() => handleRemove(arm.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;
