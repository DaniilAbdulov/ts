//составные типы
interface Address {
  city: string;
  street?: string;
  coords: string[];
}

type User = {
  firstname: string;
  address: Address;
};

const user: User[] = [
  {
    firstname: 'Daniil',
    address: {
      city: 'Tyumen',
      coords: ['one', 'two'],
    },
  },
];
//типизация функции
type onClick = () => void;

//Difference between types and interfaces

//For literals we should use types
type Literal = 'red' | 'green';

//In interfaces we should use extends for inersections(расширении). For this case in type
//we should use &
interface Entity {
  id: number;
  entityType: 3 | 5;
}

// interface JurTicket extends Entity {
//   contractUuid: string;
// }

type JurTicket = Entity & {
  contractUuid: string;
};

//Every type should be unique.
//Interface just joins
interface Shared {
  name: string;
}

interface Shared {
  lastaname: string;
}

const shared: Shared = {
  //Type '{}' is missing the following properties from type 'Shared': name, lastaname
};

type SharedType = {
  name: string;
};

type SharedType = {}; //Duplicate identifier 'SharedType'.
