import axios from "axios";
import { SERVER_ENDPOINT } from "../urls";

export const getUsers = async () => {
  let result;
  try {
    result = await axios.get(SERVER_ENDPOINT);
    result = result.data;
  } catch (error) {
    result = result.response;
  }
  return result;
};
