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

function deepCompare(obj1, obj2) {

    if (obj1 != obj2 && (typeof obj1 === 'object' && (obj1 != null) && (typeof obj2 === 'object' && (obj2 != null)))) {

        for (var key in obj1) {
            if (obj1[key] != obj2[key]) return false;
        }

        for (var key in obj2) {
            if (deepCompare(obj1[key], obj2[key])) return true;
        }
        return false;
    };
    return true;
}
var objFirst = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3, 5, 6, 8, 9],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hi');
    }
},

    objSecond = {
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

console.log(deepCompare(objFirst, objSecond));