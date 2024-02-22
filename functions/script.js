/* Перепишите функцию, используя оператор '?' или '||'
Следующая функция возвращает true, если параметр age больше 18.

В ином случае она задаёт вопрос confirm и возвращает его результат.

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

Сделайте два варианта функции checkAge:
Используя оператор ?
Используя оператор ||
*/

function checkAge_1(age) {
  return (result = age > 18 ? true : confirm('Родители разрешили?'))
}
checkAge_1(999)

function checkAge_2(age) {
  return age > 18 || confirm('Родители разрешили?')
}
checkAge_2(9)

/*
Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
*/

function min(a, b) {
  return (min = a < b ? alert(a) : alert(b))
}

min(1, 2)

// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

function pow(x, n) {
  result = x ** n
  return result
}

pow(3, 2)

/*
Замените код Function Expression стрелочной функцией:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
*/

let ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no()
}

ask(
  'Вы согласны?',
  () => {
    alert('Вы согласились.')
  },
  () => {
    alert('Вы отменили выполнение.')
  }
)
