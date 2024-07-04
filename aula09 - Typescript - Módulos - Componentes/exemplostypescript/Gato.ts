class Gato extends Animal implements Printable {
    color: string;
  
    constructor(name: string, color: string) {
      super(name);
      this.color = color;
    }
  
    ola() {
      console.log(`Miau, meu nome é ${this.name}.`);
    }
  
    print() {
      console.log(`Sou ${this.color} e sou ${this.name}.`);
    }
  }