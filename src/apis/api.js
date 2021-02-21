import axios from "axios";

const API_KEY = process.env.REACT_APP_HERO_API_KEY;

export default axios.create({
    baseURL: `https://superheroapi.com/api/${API_KEY}/`
});
