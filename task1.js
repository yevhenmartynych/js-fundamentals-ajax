// Завдання: отримання даних про користувачів
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди node tests/task1.test.js

const usersList = document.querySelector('.usersList')
const usersApi = 'https://jsonplaceholder.typicode.com/users'

fetch(usersApi)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((user) => {
      usersList.innerHTML += `<li>${user.name}</li>`
    })
  })
