// ------------------task_1-------------------------

var numbers = [-1, 0, 2, 34, -2];

var positiveNumbers = numbers.filter(function (el) {
    return el > 0;
});
console.log(positiveNumbers)

// ------------------task_2-------------------------

var arrNumbers = [-1, 3, -2, 5, -1];

var positiveNumber = arrNumbers.find(function(el) {
    return el > 0;
});

console.log(positiveNumber);

// ------------------task_3-------------------------

function isPalindrome(word) {
  return (word.toLowerCase().split('').reverse().join('') === word.toLowerCase())
}

console.log(isPalindrome('шалаШ'));
console.log(isPalindrome('привет'));

// ------------------task_4-------------------------

function areAnagrams(firstWord, secondWord) {
    return (firstWord.toLowerCase().split('').sort().join('') ===
            secondWord.toLowerCase().split('').sort().join(''))
}

console.log(areAnagrams('кот', 'отк'));
console.log(areAnagrams('кот', 'атк'));
console.log(areAnagrams('кот', 'отко');

// ------------------task_5-------------------------

function divideArr(arr, numberOfSubarr) {
    var newArr = [];

    for (i = 0; i < arr.length; i += numberOfSubarr) {
        newArr.push(arr.slice(i, i + numberOfSubarr))
    }
    return newArr;
}

console.log(divideArr([1, 2, 3, 4], 2));
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 5));

