var container = document.getElementById('container'),
    button = document.getElementsByTagName('button');
a = document.getElementsByTagName('a');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 1</a> and <a href="http://yandex.by">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="http://yandex.by">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

button[0].onclick = function() {
    a[0].setAttribute('class','a1');
    a[1].setAttribute('class','a1');
};

function aClick(event) {
    event.preventDefault();
    var target = event.target;
    alert( target.getAttribute('href') );
}

a[2].onclick = aClick;
a[3].onclick = aClick;