/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const { default: axios } = require("axios");

export const axInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { api_key: "83bf4c4ed5fcffe946729d0a15c01d3b" },
});
