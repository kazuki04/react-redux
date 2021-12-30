import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";

import "./index.css";
import EventsIndex from "./components/events_index";
import EventsNew from "./components/events_new";
import reportWebVitals from "./reportWebVitals";

const enhancer =
  process.env.NODE_ENV === "development"
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/events/new" element={<EventsNew />} />
        <Route path="/events/id" element={<EventsShow />} />
        <Route exact path="/" element={<EventsIndex />} />
        <Route exact path="/events" element={<EventsIndex />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
