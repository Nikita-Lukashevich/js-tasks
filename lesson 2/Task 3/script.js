// Увеличивая счетчик цикла на 2, нужно 5 раз:

// - запрашивать у пользователя ввод числа

// - проверять, равно ли это число 10. Если равно, выводить "Равно 10". Иначе выводить "Не равно 10"

let num = +prompt('Введите число: ');
i = 0;

for (num; i < 5; i++){
    num += 2;
    if (num === 10){
        alert('Равно 10')
    }else{
        alert('Не равно 10');
    }
}
