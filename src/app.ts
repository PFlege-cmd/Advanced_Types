type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

class Car {
  drive(): void {
    console.log('drive car');
  }
}

class Truck {
  drive(): void {
    console.log('drive truck');
  }

  loadCargo(weight: number) {
    console.log(`weight is: ${weight}`);
  }
}

interface Japanese {
  type: 'Japanese';
  kanji: string;
}

interface German {
  type: 'German';
  alphabet: 'Roman' | 'Kyrillic';
}

// interface ElevatedEmployee extends Employee, Admin {}

// Demonstrate intersection-types -  for primitives and classes
type ElevatedEmployee = Admin & Employee;

let e1: ElevatedEmployee = {
  name: 'Pat',
  privileges: ['I have no privilege'],
  startDate: new Date()
};

console.log(e1);

type Codeable = number | string;
type Binary = number | boolean;

type Numberic = Codeable & Binary;

let numeric: Numberic = 1;

console.log(typeof numeric);

// Demonstrate tape-safeguarding

type Vehicle = Car | Truck;

let v1: Vehicle = new Truck();
let v2: Car = new Car();

function printCargo(v: Vehicle){
  if ('loadCargo' in v){
    v.loadCargo(1000);
  } else {
    console.log('Vehicle ain\'t no truck');
  }
}

printCargo(v1);
printCargo(v2);

// demonstrate  discriminating unions

type Language = Japanese | German;

let german: Language = {
  type: 'German',
  alphabet: 'Roman'
}

let japanese: Language = {
  type: 'Japanese',
  kanji: '漢字'
}

let discriminateUnion : (l:Language) => void = function(l){
  if (l.type === 'German'){
    console.log(l.alphabet);
  } else {
    console.log(l.kanji);
  }
}

discriminateUnion(japanese);
discriminateUnion(german);

// demonstrate type-casting:

let inputElement: HTMLElement = document.getElementById('1')!
let paragraphElement: HTMLParagraphElement = document.getElementById('p1') as HTMLParagraphElement;
console.log(paragraphElement.innerText);


