import axios from "axios";

const API_URL = "http://localhost:3000/api/v1";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "login", { username, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(email, username, password) {
    return axios.post(API_URL + "users", {
      email,
      username,
      password,
    });
  }
}

export default new AuthService();
