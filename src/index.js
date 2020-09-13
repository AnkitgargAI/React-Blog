import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
import registerServiceWorker from "./registerServiceWorker";

// to handle the request using axios.
axios.interceptors.request.use(
  (request) => {
    console.log(request);
    return request;
  },
  (error) => {
    // this will handle request handle
    console.log(error);
    return Promise.reject(error);
  }
);
// to use default url staticly
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
// to add default headers accross all request
axios.defaults.headers.common['Auth'] = 'Auth 123';

// to handle the response using axios

var myInterceptor = axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
// axios.interceptors.request.eject(myInterceptor);
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
