import React, {Component} from "react";

export default class Panel extends Component {
    render() {
        return (
            <div>
                This is the control panel. Jump back to <a href="/">Home</a>
                <br/>
                <button onClick={this.props.auth.logout}>Logout</button>
            </div>

        )
    }
}
