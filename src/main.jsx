import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { BrowserRouter } from "react-router-dom"
import "./i18n"
import { Provider } from "react-redux"
import store from "./store";
import './index.css'


const url = "/2793_kunnga_design"
const url2 = "/2793_kunnga_Admin"
const url3 = "/2793_kunnga_dev"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Provider store={store}>

    {/* basename={process.env.PUBLIC_URL} */}
    {/* basename={url} */}

      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.Fragment>
);

serviceWorker.unregister()