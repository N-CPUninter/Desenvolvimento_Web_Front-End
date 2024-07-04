var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.ola = function () {
        console.log("Ol\u00E1, sou um ".concat(this.name, "."));
    };
    return Animal;
}());
var animal = new Animal("Gato");
animal.ola();
