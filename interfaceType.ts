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
