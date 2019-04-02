const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/users/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/users`).then(e => e.json())
  },
  delete(id) {
    return fetch(`http://localhost:5002/users/${id}`, {
      method: "DELETE"
  })
  .then(e => e.json())
  },
  post(newUser) {
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(data => data.json())
  },
  put(editedUser) {
    return fetch(`${remoteURL}/users/${editedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedUser)
    }).then(data => data.json());
  }

}