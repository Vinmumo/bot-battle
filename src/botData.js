import { useParams,useNavigate } from "react-router-dom";
import { getBotsById } from "./utilities";
import { useState, useEffect } from "react";


function BotData(){


    function handleClick(bot) {
        fetch("http://localhost:3000/army", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(bot)
          })
          .then(response => response.json())
        .then(data => {
            console.log(data);
            navigate("/")
        })
    }


    const params = useParams();
// console.log(params)
const [bot, setBots] = useState({})
const navigate = useNavigate();

  useEffect(()=> {
      getBotsById(params.id)
      .then(data => {
          setBots({...data})
        // console.log(data)
      })
      .catch(err => console.log(err))
  },[params.id])

  function goBack(){
      navigate("/")
  }
    return (
        <>
<div className="card mb-3" style= {{max_width: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={bot.avatar_url} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{bot.name}</h5>
        <p className="card-text">Bot Class:{bot.bot_class}</p>
        <p className="card-text">Health:{bot.health}</p>
        <p className="card-text">Damage:{bot.damage}</p>
        <p className="card-text">Health:{bot.health}</p>
      </div>
    </div>
    <button className="btn btn-primary btn-sm m-3" onClick={() => handleClick(bot)}>Enlist</button>
     <button onClick={goBack} className="btn btn-warning btn-sm m-3">Go Back</button>
  </div>
</div>
        </>
    )
}

export default BotData;