function Animal(name) {

    this._foodAmount = 50;
    var self = this;

    this._formatFoodAmount = function () {
        return self._foodAmount + ' гр.';
    };

    this.dailyNorm = function(amount) {
        if (!arguments.length) return self._formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        self._foodAmount = amount;
    };

    this.name = name;

    this.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}

var animal = new Animal('Барсик');

function Cat() {
    Animal.apply(this, arguments);

    var newSelf = this;
    var animalFeed = this.feed;

    this.feed = function () {
        animalFeed();
        console.log('Кот доволен ^_^');
        return newSelf;
    };

    this.stroke = function () {
        console.log('Гладим кота.');
        return newSelf;
    }
}
var cat = new Cat();
console.log(animal.name);

console.log(animal.dailyNorm());
console.log(animal.feed());

console.log(animal.dailyNorm(600));
console.log(animal.feed());

console.log(animal.dailyNorm(250));
console.log(animal.feed());

cat.feed().stroke();

animal = null;