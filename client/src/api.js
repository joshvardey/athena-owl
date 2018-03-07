import axios from "axios";

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/api"
});

const errHandler = err => {
  console.error(err.response.data);
  throw err.response.data;
};

export default {
  signup(userInfo) {
    const formData = new FormData();
    Object.keys(userInfo).forEach(key => formData.append(key, userInfo[key]));
    return service
      .post("/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => res.data)
      .catch(errHandler);
  },

  login(username, password) {
    return service
      .post("/login", {
        username,
        password
      })
      .then(res => {
        const { data } = res;
        localStorage.setItem("user", JSON.stringify(data));
        axios.defaults.headers.common["Authorization"] = "Bearer " + data.token;
        return data;
      })
      .catch(errHandler);
  },

  getSecret() {
    return service
      .get("/secret")
      .then(res => res.data)
      .catch(errHandler);
  },

  getThreads() {
    return service
      .get("/threads")
      .then(res => res.data)
      .catch(errHandler);
  },

  postThread(data) {
    return service
      .post("/threads", data)
      .then(res => res.data)
      .catch(errHandler);
  },

  getOneThread(threadId) {
    return service
      .get("/threads/" + threadId)
      .then(res => res.data)
      .catch(errHandler);
  },

  postDab(threadId, dabData) {
    return service
      .post("/threads/" + threadId + "/dabs", dabData)
      .then(res => res.data)
      .catch(errHandler);
  },

  postVote(vote) {
    return service
      .post("/vote/" + vote.dabId, vote)
      .then(res => res.data)
      .catch(errHandler);
  },

  userProfile(userId) {
    return service
      .get("/profile/" + userId)
      .then(res => res.data)
      .catch(errHandler);
  },

  deleteDab(user, dab) {
    return service
      .delete("/" + user + "/" + dab)
      .then(res => res.data)
      .catch(errHandler);
  },

  deleteThread(user, thread) {
    return service
      .delete("/" + user + "/" + thread)
      .then(res => res.data)
      .catch(errHandler);
  },

  logout() {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("user");
  },

  loadUser() {
    const userData = localStorage.getItem("user");
    if (!userData) return false;
    const user = JSON.parse(userData);
    if (user.token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;
      return user;
    }
    return false;
  }
};
