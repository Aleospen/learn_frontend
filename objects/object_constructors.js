'use strict'

/*
Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
read() запрашивает два значения при помощи prompt и сохраняет их значение в
свойствах объекта.
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств.
*/

function Calculator(){
    this.read = function (){
        this.a = prompt('Enter first value', 0)
        this.b = prompt('Enter second value', 0)
    }
    this.sum = function (){
        return Number(this.a) + Number(this.b)
    }
    this.mul = function(){
        return this.a * this.b
    }
}

let calculator = new Calculator()
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

/*
Напишите функцию-конструктор Accumulator(startingValue).
Объект, который она создаёт, должен уметь следующее:
Хранить «текущее значение» в свойстве value. Начальное значение устанавливается
в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству
value.
Таким образом, свойство value является текущей суммой всего, что ввёл пользователь
при вызовах метода read(), с учётом начального значения startingValue.
*/

function  Accumulator(startingValue){
    this.value = startingValue
    this.read = function(){
        let newValue = prompt('Enter first value', 0)
        this.value += Number(newValue)
    }
}

let accumulator = new Accumulator(0)

accumulator.read()
console.log(accumulator)

accumulator.read()
console.log(accumulator)

