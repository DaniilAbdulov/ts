type isArray<T> = T extends any[] ? true : false;

const first: isArray<string> = false;
const second: isArray<string[]> = true;

//с помощью данной конструкции реализована простая проверка: является ли тип массивом
