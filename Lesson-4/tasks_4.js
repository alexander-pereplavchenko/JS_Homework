//-------------Task_1-------------------

var x = prompt('Введите х');
var n = prompt('Введите n');

function pow(x, n) {
    var result = 1;

    if ((typeof n !== 'number') || (n%1 !== 0) || (n < 1)) {
        alert('Число n должно быть целым и >= 1');
    } else {
        for (var i = 0; i < n; i++) {
            result = result * x;
        }

        return result;
    }
}

pow(x, n);

//-------------Task_2-------------------

//-------------variant_1----------------

var result = 0;

function sumTo(n) {

    if ((typeof n !== 'number') || (n%1 !== 0) || (n < 1)) {
        alert('Некорректное значение!');
    }
    else {
        for (var i = 0; i <= n; i++) {
            result += i;
        }
        return result;
    }
}

sumTo(3);

//-------------variant_2----------------

function sumTo(n) {

    if ((typeof n !== 'number') || (n%1 !== 0) || (n <= 1)) {
        alert('Некорректное значение!');
    } else {

        return n + sumTo(n - 1);
    }
}

sumTo(3);

//-------------variant_3----------------

var result = 0;

function sumTo(n) {

    if ((typeof n !== 'number') || (n%1 !== 0) || (n < 1)) {
        alert('Некорректное значение!');
    }
    else {
        result = (1 + n) * n / 2;
    }
    return result;

}

sumTo(3);

//  Cамый быстрый вариант - это формула суммы арифметической прогрессии,
// потому что код идет без выполнения итераций.

//  Рекурсия - тоже самое, только вместо итераций - вызовы функции.

// Самый медленный вариант - это рекурсия. Рекурсия требует больше памяти для многочисленных вызовов фукции.

// Нет, потому что максимальная глубина рекурсии в браузерах ограничена.


//-------------Task_3-------------------

function treeSum(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        if ( isFinite(array[i]) ) {
            sum += array[i];
        } else if (typeof array[i] === 'object' && array[i].length) {
            sum += treeSum(array[i]);
        } else { continue }
    }

    return sum;
}

var arr = [
           5, 7,
           [4, [2], 8, [1, 3], 2],
           [9, []],
           1, 8
          ];

treeSum(arr);
