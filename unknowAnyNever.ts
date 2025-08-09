//супертип
type SuperType = {
  fullname: string;
};
//подтип в котором есть поле из супетипа
type SubType = {
  fullname: string;
  age: number;
};

//any. any отключает весь функционал ts и для него любой тип данных будет норм
let anyValue: any = [];
anyValue = 'string';
anyValue = 5;
//any может быть как супертипом для всех, так и подтипом

//unknow является супертипом для всех, но не может являться подтипом
//для присвоения data:unknow какой либо переменной, ts будет заставлять проверять тип data
//например, что бы присвоить unkonow data значение из строки, нужно предварительно проверить, что data - это строка
function logData(data: unknown) {
  let value: string;

  if (typeof data === 'string') {
    value = data;
  }
}

//never наиболее узкий тип. он может быть подтипом для всех, но не может являться супертипом
//так можно
function getNever(): never {
  throw new Error('Это never');
}

let value: never = getNever();
let str: string = value;

//а вот так уже нелья. присвоить что-то в never невозможно
let str2: string = 'string';
let val2: never = str2;

// |  Тип  |Супертип для всех типов|Подтип для всех типов|
// |unknown|        Да             |         Нет         |
// |  any  |        Да             |         Да          |
// | never |        Нет            |         Да          |
