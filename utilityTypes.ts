interface User2 {
  firstname: string;
  lastname: string;
  age: number;
}
//Pick позволяет из одно типа достать только некоторые поля
type NewUser = Pick<User2, 'firstname' | 'lastname'>;

const user: NewUser = {
  //Type '{}' is missing the following properties from type 'NewUser': firstname, lastname
};
//Omit наоборот исключает, то есть
type OmitUser = Omit<User2, 'age'>;

const anotherUser: OmitUser = {
  //Type '{}' is missing the following properties from type 'OmitUser': firstname, lastname
};

//Exclude and Extract uses for Unions
type Color = 'red' | 'blue' | 'green';

type ExcludeColor = Exclude<Color, 'red'>;
type ExtractColor = Extract<Color, 'red'>;

const myColor: ExcludeColor = 'red'; //Type '"red"' is not assignable to type 'ExcludeColor'.
const anotherColor: ExtractColor = 'blue'; //Type '"blue"' is not assignable to type '"red"'.

//Record. Заставит перечсилить все ключи и их значения
const arrOfColors: Record<Color, string> = {
  red: 'red',
  blue: 'blue',
  green: 'green',
};
//Partial делает ключи не обязательными и мы можем перечислить только некоторые из них
const arrOfSomeColors: Partial<Record<Color, string>> = {
  red: 'red',
  green: 'green',
};
