import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-f2bb0-default-rtdb.firebaseio.com/",
});

export default instance;
