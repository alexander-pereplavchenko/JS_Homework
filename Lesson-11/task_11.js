// --------------task_1-------------

var arr = ['Vasya', 'Sasya', 'Masya'];
function getArrOfObjects(v, i, a) {
    return {name: v};
}
console.log(arr.map(getArrOfObjects))

// --------------task_2-------------

var arr = ['00', '13', '24'];

function getTime(r, v, i, a) {
   return 'Текущее время : ' + a.join(' : ') + '"'
}
console.log(arr.reduce(getTime))

// --------------task_3-------------

var str = 'HEEEllo, Вася!';

function countVowels(r, v) {
    var VOWELS = 'ауоыиэяюёеaeiou';
    if (VOWELS.indexOf(v) > -1) {
        return ++r;
    } else {
        return r;
    }
}
console.log(str.toLowerCase().split('').reduce(countVowels, 0));

// --------------task_4-------------

var text = 'G;lgalalhhl gksahg, fhak. Fghashgsgh, j;,v! sdklghweg?';

function getSentenses(text) {
    var arrOfSentenses = text.split(/\.\s|!\s|\?\s/);

    function countLetter(v, i, a) {
        console.log(v + ' = ' + v.split(/[^a-zA-z]/).join('').length);
    }

    arrOfSentenses.forEach(countLetter);
}
console.log(getSentenses(text));