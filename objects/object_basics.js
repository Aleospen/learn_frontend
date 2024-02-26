'use strict'

/*
Напишите код, выполнив задание из каждого пункта отдельной строкой:
1. Создайте пустой объект user .
2. Добавьте свойство name со значением John .
3. Добавьте свойство surname со значением Smith .
4. Измените значение свойства name на Pete .
5. Удалите свойство name из объекта.
*  */

let user = {}
user.name = 'John'
user.surname = 'Smith'
user.name = 'Pete'
delete user.name

/*
Напишите функцию isEmpty(obj) , которая возвращает true
если у объекта нет свойств, иначе false
*/

let x = {}
let i

function isEmpty(obj){
 for (let key in obj) {
     console.log(obj.key)
 }}

 isEmpty(x)

/*
У нас есть объект, в котором хранятся зарплаты нашей команды:
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum .
Должно получиться 390 .
Если объект salaries пуст, то результат должен быть 0
*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0

for (let key in salaries){
  sum += salaries[key]
}

console.log('Sum of salaries = ' + sum)

/*
Создайте функцию multiplyNumeric(obj),
которая умножает все числовые свойства объекта obj на 2
*/

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu)
console.log(menu.width)

/*
Создайте объект calculator (калькулятор) с тремя методами:
read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
sum() (суммировать) возвращает сумму сохранённых значений.
mul() (умножить) перемножает сохранённые значения и возвращает результат.
*/

let calculator = {
    read: function(){
         calculator.a = prompt('Enter first value', 0)
         calculator.b = prompt('Enter second value', 0)
    },
    sum: function(){
        return Number(this.a) + Number(this.b)
    },
    mul: function(){
        return this.a * this.b
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//     },
//     down() {
//         this.step++;
//     },
//     showStep: function() { // показывает текущую ступеньку
//         alert( this.step );
//     }
// };

// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке
// ladder.up().up().down().showStep(); // 1

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step++;
        return this
    },
    showStep: function () {
        alert(this.step);
        return this
    }
}

ladder.up().up().down().showStep();

