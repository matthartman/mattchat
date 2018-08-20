import "../css/main.scss";

import React from "react";
import ReactDOM from "react-dom";
import Router from "./router";
import { NotFound } from "./error-views";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Home.</h1>
                <p>This is home. I guess?</p>
            </div>
        );
    }
}

let routes = [["/", Home], ["*", NotFound]];

ReactDOM.render(<Router routes={routes} />, document.getElementById("root"));
