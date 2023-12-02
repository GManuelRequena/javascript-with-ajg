import axios from "axios";

const BASE_URL = "http://localhost:9898/api/v1/users";

const config = () => {
  return {
    headers: {
      Authorization: sessionStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  };
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(BASE_URL + "/all");
    return response;
  } catch (error) {
    console.error(error);
  }

  return null;
};

export const save = async ({ username, password, email }) => {
  try {
    return await axios.post(
      BASE_URL,
      {
        username,
        password,
        email,
      },
      config()
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const update = async ({ id, username, email }) => {
  try {
    return await axios.put(
      `${BASE_URL}/${id}`,
      {
        username,
        email,
      },
      config()
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteUser = async (id) => {
  try {
    await axios.delete(`${BASE_URL}/${id}`, config());
  } catch (error) {
    console.error(error);
  }
};
