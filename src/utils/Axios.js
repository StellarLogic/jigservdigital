import axios from "axios";

const Axios = axios.create({
  baseURL: "https://jigservdigital.com/api/",
  timeout: 1000,
});

Axios.getCategories = () => Axios.get("/categories").then((res) => res.data);
Axios.getUniversities = () =>
  Axios.get("/universities").then((res) => res.data);

export default Axios;
