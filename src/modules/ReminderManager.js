const remoteURL = "https://remember-me-birthday-api.herokuapp.com"

export default {
  get(id) {
    return fetch(`${remoteURL}/reminders/${id}`).then(e => e.json())
  },
  getAll(id) {
    return fetch(`${remoteURL}/reminders/?userId=${id}`).then(r => r.json())
},
post(newReminder) {
  return fetch(`${remoteURL}/reminders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newReminder)
  }).then(data => data.json())
},
delete(id) {
  return fetch(`${remoteURL}/reminders/${id}`, {
    method: "DELETE"
})
.then(e => e.json())
},
edit(editedReminder) {
  return fetch(`${remoteURL}/reminders/${editedReminder.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(editedReminder)
  }).then(data => data.json());
}
}