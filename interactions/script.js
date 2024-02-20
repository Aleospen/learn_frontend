// ALERT
alert('AAAAAAAA!!!')

// PROMPT
let yourFavouriteFood = prompt('Your favourite food?', ['pizza'])

// CONFIRM
let areYouAgree = confirm('Yes i can')
alert(areYouAgree)

// Создайте страницу, которая спрашивает имя у пользователя и выводит его
let yourName = prompt('What are you name?', 'Boka')
alert(`Your name - ${yourName}`)

/*
Напишите скрипт, который запрашивает у пользователя ввод числа с помощью модального окна prompt,
затем вычисляет квадрат этого числа и выводит результат в новом модальном окне.
*/

let userNumb = prompt('Введите число', '')
const result = userNumb * userNumb
alert(`Квадрат числа - ${userNumb}, равен - ${result}`)

alert(+true)
