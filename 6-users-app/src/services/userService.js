import usersApi from "../apis/usersApi";

const BASE_URL = "";

export const getAllUsers = async () => {
  try {
    const response = await usersApi.get(BASE_URL + "/all");
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const save = async ({ username, password, email, admin }) => {
  try {
    return await usersApi.post(BASE_URL, {
      username,
      password,
      email,
      admin,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const update = async ({ id, username, email, admin }) => {
  try {
    return await usersApi.put(`${BASE_URL}/${id}`, {
      username,
      email,
      admin,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    await usersApi.delete(`${BASE_URL}/${id}`);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
