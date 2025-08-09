//Литералы - это конкретные значения, которые
//мы используем как тип

type Color = 'red' | 'green';
type Size = 1 | 2 | 3;
const color: Color = 'red';
const mySize: Size = 2;

type EventName = 'click' | 'change';

type EventHandler = `on${EventName}`;

type UserId = `user_id_${number}`;

const userId: UserId = `user_id_343`;
