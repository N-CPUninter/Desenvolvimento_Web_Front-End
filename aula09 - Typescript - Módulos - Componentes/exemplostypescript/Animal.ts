class Animal {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    ola() {
      console.log(`Olá, sou um ${this.name}.`);
    }
  }

  var animal = new Animal("Gato");
  animal.ola();
  