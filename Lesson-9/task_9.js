// --------------task_1-------------

function Animal(name) {
    this.name = name;
    this._foodAmount = 50;
}

Animal.prototype._formatFoodAmount = function() {
    return this._foodAmount + ' гр.';
};

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this._formatFoodAmount();

    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }

    this._foodAmount = amount;
};

Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

var animal = new Animal('Барсик');

function Cat() {
    Animal.apply(this, arguments);
};

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.feed = function() {
    Animal.prototype.feed.call(this);
    console.log('Кот доволен ^_^');
    return this;
};

Cat.prototype.stroke = function() {
    console.log("Гладим кота.");
    return this;
};

var cat = new Cat();

console.log(animal.name);

console.log(animal.dailyNorm());
console.log(animal.feed());

console.log(animal.dailyNorm(600));
console.log(animal.feed());

console.log(animal.dailyNorm(250));
console.log(animal.feed());

cat.feed().stroke().stroke();

animal = null;

// --------------task_2-------------

function deepClone(initialObj) {
    var clonedObj = new initialObj.constructor();

    for (var key in initialObj) {
        if ((initialObj[key] != null) && typeof initialObj[key] === 'object') {
            clonedObj[key] = deepClone(initialObj[key]);

        } else if (Array.isArray(initialObj[key])) {
            clonedObj[key] = deepClone(initialObj[key]);

        } else clonedObj[key] = initialObj[key];
    }

    return clonedObj;
}

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);

// // --------------task_3-------------


function deepCompare (obj1, obj2) {
    var counter = 0;

    outer: for (var i in obj1) {
        counter = 0;

        for (var j in obj2) {
            if (i===j) {
                if(Array.isArray(obj1[i]) && Array.isArray(obj2[j])) {
                    if( !deepCompare(obj1[i],obj2[j]) ) {
                        return false;
                    }
                    counter++;
                    continue outer;
                }
                if (((obj1[i] === null)) &&
                    ((obj2[j] === null))) {
                    counter++;
                    continue outer;
                }
                if (((typeof(obj1[i]) === 'function')) &&
                    ((typeof(obj2[j]) === 'function'))) {
                    if (obj1[i].toString() !== obj2[j].toString()) {
                        return false;
                    }
                    counter++;
                    continue outer;
                }
                if (((typeof(obj1[i]) === 'object')) &&
                    ((typeof(obj2[j]) === 'object'))) {
                    if( !deepCompare(obj1[i],obj2[j]) ) {
                        return false;
                    }
                    counter++;
                    continue outer;
                }
                if (obj1[i] === obj2[j]) {
                    counter++;
                    continue outer;
                }
            }
        }
        if(!counter++) {
            return false;
        }
    }
    return true;
}


var Obj1 = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

var Obj2 = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};

console.log(deepCompare(Obj1,Obj2));
