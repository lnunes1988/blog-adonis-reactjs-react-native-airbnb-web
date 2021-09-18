import axios from "axios";
//import { getToken, } from "./auth";
//require("dotenv-safe").config();
const jwt = require('jsonwebtoken');


const api = axios.create({
  //baseURL: "http://187.94.62.84:4322/rest/api/oauth2/v1/token?grant_type=password&password=tri122121&username=admin"
  baseURL: "http://187.94.62.84:4322/rest/api/"
});
const id = 1;
const token = jwt.sign({ id }, 'process.env.SECRET', {
  expiresIn: 300 // expires in 5min
});
console.log("id: "+ id)
console.log("token: "+ token)
/*
api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});*/

export default api;