import React from "react";
import ReactDOM from "react-dom/client";
import App1 from "./App";
import App2 from "./appWithAuth"; 


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<React.StrictMode> <App2 /> </React.StrictMode>);
