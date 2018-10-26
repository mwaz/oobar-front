import { registerUser } from "../authActions/registration";
import * as api from "../../../apiCalls/authApi";
import axiosInstance from "../../../apiCalls/axiosInstance";

export async function userRegistration(data, dispatch) {
  let response = new Promise((resolve, reject) => {
    axiosInstance.post("auth/signup/", data);
    if (response) {
      resolve(response=> response.data, console.log("success"));
    }
    reject(err => err.data, console.log("error!"));
  });
  let result = await response;
if(result) {
    dispatch(data => registerUser(data))
}
}
// axiosInstance
//     .post("auth/signup/", data)
//     .then(response => response.data, console.log(">>>>>"))
