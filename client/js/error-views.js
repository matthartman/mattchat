import React from "react";

export class NotFound extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>404 Not Found</h1>
                <p>The requested resource was not found at this location.</p>
            </div>
        );
    }
}
