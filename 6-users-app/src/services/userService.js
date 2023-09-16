import axios from "axios";

export const getAllUsers = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/v1/users/all");
    return response;
  } catch (error) {
    console.log(error);
  }

  return null;
};
