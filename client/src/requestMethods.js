import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWJkMjJhOGY1OTM3NjM2YzNjYmIzNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODgwMDA3NywiZXhwIjoxNjM5MDU5Mjc3fQ.LiFy5ziXeFx-OBQ_jeUcIIvtSdjGyLWF8PCkCJBIo2c"

//const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
//const currentUser = user && JSON.parse(user).currentUser;
//const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
