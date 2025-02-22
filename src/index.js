import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

//dev-fz7dnbe2.us.auth0.com

//57mg4GqhyJ8RlBlr9nIEyBgl8yeI1zvF
ReactDOM.render(
  <Auth0Provider
    domain="dev-fz7dnbe2.us.auth0.com"
    clientId="57mg4GqhyJ8RlBlr9nIEyBgl8yeI1zvF"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
