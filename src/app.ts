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

interface ErrorContainer {
  id: string;
  [prop: string]: string;
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
let v2: Vehicle = new Car();
let vTruck: Truck = new Truck();

// demonstrate function overloading

function printCargo(v: Truck, weight: number): void;
function printCargo(v: Car, weight: number): void;
function printCargo(v: Vehicle, weight: number){
  if ('loadCargo' in v){
    v.loadCargo(weight);
  } else {
    console.log('Vehicle ain\'t no truck');
  }
}

printCargo(v1, 10);
printCargo(v2, 100);
printCargo(vTruck, 1000);

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

// demonstrate indexed parameters

let emailContainer: ErrorContainer = {
  id: '123',
  email: 'Incorrect email',
  inputField: 'incorrect input added'
}

let nameContainer: ErrorContainer = {
  id : '321',
  nameField: 'Name does contain invalid characters'
}



type deepStructure = {
  level: number,
  nested: {
    level: number
  } | undefined
}

let deepStructureUndefined: deepStructure = {
  level: 1,
  nested: undefined
}

let deepStructureDefined: deepStructure = {
  level: 1,
  nested: {
    level: 2
  }
}

// demonstrate optional chaining

console.log(nameContainer?.email);
console.log(deepStructureUndefined?.nested?.level);
console.log(deepStructureDefined?.nested?.level);

let nullish = 0??undefined;

if (true){
  console.log(nullish)
}

//console.log(null??0);

// let test = {
//   myName: 'Max'
// };
//
// let test2 = {
//   myName: 'Max'
// }

let test = 'NY';
let test2 = 'NY';


let testing = test === test2;

console.log(`Zijn objecten gelijk? ${testing}`);

