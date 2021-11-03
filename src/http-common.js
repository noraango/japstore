import axios from "axios";
export var url = "https://localhost:6969";
export default axios.create({
  baseURL: "https://localhost:6969",
  headers: {},
});
