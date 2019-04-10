
export default {


  getAll() {
    return fetch("https://proxy-server-birthdays.herokuapp.com/api/celebBirthdays/")
    .then(r => r.json())

    // .then(res => res.text())          // convert to plain text
    // .then(text => console.log(text))  // then log it out
}
}