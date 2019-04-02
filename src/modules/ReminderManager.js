const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/reminders/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/reminders`).then(e => e.json())
  },
}