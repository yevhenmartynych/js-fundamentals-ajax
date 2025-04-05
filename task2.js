// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

const userNameInput = document.querySelector('#userNameInput')
const getUserButton = document.querySelector('#getUserButton')
const userCity = document.querySelector('#userCity')
const userApi = 'https://jsonplaceholder.typicode.com/users'

getUserButton.addEventListener('click', async () => {
  const userInput = userNameInput.value

  const response = await fetch(userApi)
  const user = await response.json()

  const result = user.find((item) => item.name == userInput)
  userCity.innerHTML = `${result.address.city}`
})
