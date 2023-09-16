import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/users";

export const getAllUsers = async () => {
  try {
    const response = await axios.get(BASE_URL + "/all");
    return response;
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const save = async ({ userName, password, email }) => {
  try {
    return await axios.post(BASE_URL, {
      userName: userName,
      password,
      email,
    });
  } catch (error) {
    console.error(error);
  }
  return undefined;
};

export const update = async ({ id, userName, password, email }) => {
  try {
    return await axios.put(`${BASE_URL}/${id}`, {
      userName,
      password,
      email,
    });
  } catch (error) {
    console.error(error);
  }
  return undefined;
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error(error);
  }
  return console.log("The user was removed");
};
