const setUser = (payload) => ({ type: "SET_USER", payload });

export const logUserOut = () => ({ type: "LOG_OUT" });
// Methods

export const fetchUser = (userInfo) => (dispatch) => {
  fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((r) => r.json())
    .then((data) => {
      console.log("Signing In", data);
      localStorage.setItem("token", data.jwt);
      dispatch(setUser(data.user));
    });
};

export const signUserUp = (userInfo) => (dispatch) => {
  fetch("http://localhost:3000/api/v1/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  })
    .then((r) => r.json())
    .then((data) => {
      console.log("Signing Up", data);
      localStorage.setItem("token", data.jwt);
      dispatch(setUser(data.user));
    });
};

export const checkLogin = () => (dispatch) => {
  fetch("http://localhost:3000/api/v1/profile", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((r) => r.json())
    .then((data) => {
      console.log("Checking login", data);
      localStorage.setItem("token", data.jwt);
      dispatch(setUser(data.user));
    });
};
