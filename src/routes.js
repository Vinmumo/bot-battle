import App from "./App";
// import Home from "./components/Home";
// import Transaction from "./components/Transaction";

const routes = [
   {
    path: '/',
    element: <App/>,
    errorElement: <h1> An Error coccured</h1>,
    children:[
      {
        path: "/",
        element: <App/>
      },
    //   {
    //     path: "/transactions/:id",
    //     element: <Transaction/>
    //   }
    ]

  }
]

export default routes