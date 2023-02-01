// Задание 1

// Напишите функцию, которая принимает три числовых аргумента: number, min, max.

// Функция проверяет, находится ли число number в диапазоне чисел от min до max.

// 1 вариант решения: с помощью логического И в условии.

// *2 вариант решения: с помощью логического ИЛИ в условии.

let number = prompt('Введите число number: ');
let min = prompt('Введите число min: ');
let max = prompt('Введите число max: ');

function result(number, min, max){
    if (number >= min && number <= max){
        console.log(`Да, number входит в диапозон`);
    }else{
        console.log(`Нет, number не входит в диапозон`);
    }
}

// function resulta(number, min, max) {
//     if (number >= min || number <= max) {
//         console.log(`Да, number входит в диапозон`);
//     }else{
//         console.log(`Нет, number не входит в диапозон`);
//     }
// }

result();



// Задание 2

// Есть объект с именами и заработными платами инженеров:
// const engineers = {
// Den: 1000,
// Matt: 5000,
// Steve: 2000
// }
// Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:

// Заработная плата ххх составляет ххх рублей.

// Ваше решение должно работать для любого количества ключей в объекте!


// Задание 3



// Создать массив из 5 элементов.

// Используя цикл for, вывести каждый второй элемент массива в консоль.


// Задание 4

// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:

// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.

// Задание 5

// Дан массив объектов, например:

// let questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];

// Добавить в каждый объект дополнительное поле usersAnswer со значением null.

// Решение должно работать для массива любой длины.


// Задание 6

// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// 1) Посчитать и вывести в консоль сумму элементов в массиве.

// Подсказка: в задачах такого типа нужно заранее предусмотреть переменную (например, sum) и записать в нее начальное значение (в случае с суммой - ноль). Затем уже описать цикл, в котором эта сумма будет считаться (в каждой итерации цикла к ней будет прибавляться следующий элемент массива).

// 2) Посчитать и вывести в консоль сумму четных элементов в массиве.

// 3) Найти и вывести в консоль максимальное число массива.

// Подсказка: как и в случае с суммой, здесь сначала нужно объявить переменную (например, max), записать в нее первый элемент массива, а затем уже в цикле искать максимальное значение.

// 4) Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза). Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.