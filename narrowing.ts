//сужение типов.
//ситуация, когда union тип необходимо обработать в конкретном типе
//т.е если у нас в типе может быть number | string | null
//но нам надо обработать каждый тип по своему
function fn(arg: number | string | null) {
  if (typeof arg === 'number') {
    return arg * 2;
  }

  if (typeof arg === 'string') {
    return `hello, ${arg}`;
  }

  return arg;
}

//второй способ - сравнение с заведомо известным типом

function fn2(arg: number | string | null) {
  if (arg === null) {
    arg;
  }

  if (arg === 5) {
    arg;
  }

  return arg;
}

//работа с объектами. фишка в том, что здесь нельзя будет проверить typeof
interface User {
  username: string;
  age: number;
}

interface Person {
  lastname: string;
  firstname: string;
  age: number;
}
//сделать это можно через in
function fn3(arg: User | Person) {
  if ('username' in arg) {
    arg; //arg: User
  }

  if ('firstname' in arg) {
    arg; //arg: Person
  }
}

//работа с классами через instanceof

class BMW {}

class Audi {}

const bmw = new BMW();
const audi = new Audi();

function fn4(arg: BMW | Audi) {
  if (arg instanceof BMW) {
    arg; // arg: BMW
  }
}

// discriminated unions
interface BaseCar {
  maxSpeed: number;
  weight: number;
}

interface Bmw extends BaseCar {
  type: 'bmw';
  bmwField: string;
}

interface Audi extends BaseCar {
  type: 'audi';
  audiField: string;
}

type Car = Audi | Bmw;

function fn5(arg: Car) {
  switch (arg.type) {
    case 'audi':
      arg.audiField;
      break;
    case 'bmw':
      arg.bmwField; //arg.bmwField
      break;
    default:
      arg; //never
      break;
  }
}
// в данном кейсе ts по полю type сам сузил тип, и дополняет то, что прописано в определнном интерфейсе
