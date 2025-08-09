//Generics (обобщения)
//Позволяют передавать тип, как аргумент
//В примере создан интерфейс ApiResponse с перечислением его полей
//Далее для каждого объекта мы можем передавать разные дженерики
//например, для ответа от АПИ юзеров в data вернется ApiResponse с полями MyUser
//аналогично для ответа от Article API
//то есть ApiResponse универсальный ответ от АПИ, а data мы типизируем по своему для каждого
interface MetaData {
  reason: string;
}

interface MyUser {
  username: string;
}

interface Article {
  title: string;
}
//дженерики можно передавать через запятую
//например, передали дженерик, которые воспримется как Т и дженерик для меты
interface ApiResponse<T, MetaData> {
  status?: 'error' | 'success';
  meta?: MetaData;
  requestId?: string;
  data: T;
}

const responseFromUserApi: ApiResponse<MyUser, MetaData> = {
  meta: {
    reason: 'reason',
  },
  data: {
    username: 'Daniil',
  },
};

const responseFromArticleApi: ApiResponse<Article, MetaData> = {
  meta: {
    reason: 'reason',
  },
  data: {
    title: 'MyTitle',
  },
};

//дженерики в функциях
function createEntity<D extends {id: number; createdAt: Date}>(arg: D) {}
//мы обязаны реализовать id и createdAt
const result = createEntity({id: 1, createdAt: new Date(), username: 'Daniil'});
