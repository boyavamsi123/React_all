/*import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

document.body.innerHTML = '<div id = "root"></div>';

const root = createRoot(<App />, document.getElementById('root'));
//root.render(<div><h1>Good evening</h1><h2>Hello, World!</h2></div>);*/

/*import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));*/

import { createRoot } from 'react-dom/client';
import App from "./App";

const root = createRoot(document.getElementById('root'));
root.render(<App />);

