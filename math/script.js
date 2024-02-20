let a = '3'
let b = '3'
let resultSum = +a + +b
alert(resultSum)

let c = 1
numb += 1
alert(c)

let d = 5
d++
alert(d)

let e = 1
alert(2 * ++e)

let r = 1
alert(2 * r++)

/*
Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
В чём ошибка? Исправьте её. Результат должен быть 3.

let l = prompt("Первое число?", 1);
let m = prompt("Второе число?", 2);
alert(l + m); // 12
*/

let l = prompt('Первое число?', 1)
let m = prompt('Второе число?', 2)
alert(+l + +m)

let machine = 'Каток'
let place = 'каток'
console.log(machine < place) // true
