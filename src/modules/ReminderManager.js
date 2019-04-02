const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/reminders/${id}`).then(e => e.json())
  },
  getAll(id) {
    return fetch(`${remoteURL}/reminders/?userId=${id}`).then(r => r.json())
}
}