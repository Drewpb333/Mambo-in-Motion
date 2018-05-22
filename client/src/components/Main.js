import React, { Component } from "react";


export default class Main extends Component {
    render() {
        return (
            <div>
                <p className="App-intro">
                    Hello, {this.props.name} Do you want to see the secret area? <a ref="/secret">Click here</a>
                </p>


            {!this.props.auth.isAuthenticated() && 
                <div>
                    <h1>Please login first</h1>
                    <button onClick={this.props.auth.login}>Login</button>
                </div>
            }
            </div>

        )
    }
}