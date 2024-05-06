import App from "./App";
import BotData from "./botData";

// import Transaction from "./components/Transaction";

const routes = [
   {
    path: '/',
    element: <App/>,
    errorElement: <h1> An Error coccured</h1>
   },{
        path: "/botData/:id",
        element: <BotData/>
      }
    ]

export default routes