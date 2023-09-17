import axios from "axios";

const BASE_URL = "http://localhost:9898/api/v1/users";

export const getAllUsers = async () => {
  try {
    const response = await axios.get(BASE_URL + "/all");
    return response;
  } catch (error) {
    console.error(error);
  }

  return null;
};

export const save = async ({ userName, password, email }) => {
  try {
    return await axios.post(BASE_URL, {
      userName,
      password,
      email,
    });
  } catch (error) {
    throw error;
  }
};

export const update = async ({ id, userName, email }) => {
  try {
    return await axios.put(`${BASE_URL}/${id}`, {
      userName,
      email,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error(error);
  }
};
