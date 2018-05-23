/*global location*/ 
/* eslint no-restricted-globals: ["off", "location"] */
import auth0 from "auth0-js";

/*global LOGIN_SUCCESS_PAGE b:true*/
/*eslint no-undef: "error"*/

/*global LOGIN_FAILURE_PAGE b:true*/
/*eslint no-undef: "error"*/
export default class Auth {
    auth0 = new auth0.WebAuth({
        domain: "asifk.auth0.com",
        clientID: "Oxkb5AXMZTBRCrxCqEOYqOPhQD6vYspp",
        redirectUri: "http://localhost:3000/callback",
        audience: "https://asifk.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid"
    });

    constructor() {
        this.login = this.login.bind(this);
    }

    login() {
        this.auth0.authorize();

    }


    handleAuthentication() {
        this.auth0.parseHash((err, authResults) => {
            if (authResults && authResults.accessToken && authResults.idToken) {
                let expiresAt = JSON.stringify((authResults.expiresIn) * 1000+ new Date().getTime());
                localStorage.setItem("access_token", authResults.accessToken);
                localStorage.setItem("id_token", authResults.idToken);
                localStorage.setItem("expires_at", expiresAt);
                location.hash = "";
                location.pathname = LOGIN_SUCCESS_PAGE;
            } else if (err) {
                location.pathname = LOGIN_FAILURE_PAGE;
                console.log(err);
            }
        });
    }

    isAuthenticated() {
        let expiresAT = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAT;
    }

    logout() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        location.pathname = LOGIN_FAILURE_PAGE;
    }

    

}