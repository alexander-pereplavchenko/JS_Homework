var inputX = document.getElementById('input1'),
    inputY = document.getElementById('input2'),
    button = document.getElementById('button'),
    table = document.createElement('table'),
    coordinateX,
    coordinateY,
    td,
    tr;

function enableButton() {
    button.setAttribute('disabled','disabled');
    if(inputX.value && inputY.value) {
        button.removeAttribute('disabled');
    }
};

inputX.onkeyup = enableButton;
inputY.onkeyup = enableButton;

button.onclick = function() {
    coordinateX = inputX.value,
        coordinateY = inputY.value;
    button.setAttribute('disabled','disabled');
    table.remove();

    if(coordinateX < 1 || coordinateX > 10 || +coordinateX !== +coordinateX) {
        alert ('Ошибка. Ввденные данные в поле X - ' + coordinateX +
            ' не являются числом от 1 до 10.');
        inputX.value = '';

    }

    if(coordinateY < 1 || coordinateY > 10 || +coordinateY !== +coordinateY) {
        alert ('Ошибка. Ввденные данные в поле Y - ' + coordinateY +
            ' не являются числом от 1 до 10.');
        inputY.value = '';
    }

    if (inputX.value == '' || inputY.value == ''){
        return false;
    }

    button.parentElement.appendChild(table);
    inputY.value = '';
    inputX.value = '';
    table.innerHTML = '<table></table>';

    for(var i =0; i < coordinateY; i++) {
        tr = document.createElement('tr');
        table.appendChild(tr);

        for (var j = 0; j < coordinateX; j++) {
            td = document.createElement('td');
            tr.appendChild(td);

            if (!((j+i)%2)) {
                td.setAttribute('class','black');
            }
        }
    }
};

table.onclick = function() {
    var trCollection = table.children,
        tdCollection;

    for( var i =0; i < coordinateY; i++ ) {
        tdCollection = trCollection[i].children;

        for (var j = 0; j < coordinateX; j++) {
            tdCollection[j].hasAttribute('class') ?
                tdCollection[j].removeAttribute('class') :
                tdCollection[j].setAttribute('class','black');
        }

    }
};