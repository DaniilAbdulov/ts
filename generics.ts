//Generics (обобщения)
interface MetaData {
  reason: string;
}

interface MyUser {
  username: string;
}

interface Article {
  title: string;
}

interface ApiResponse<T> {
  status: 'error' | 'success';
  meta: MetaData;
  requestId: string;
  data: T;
}

const response: ApiResponse<MyUser> = {
  data: {
    sfas: '124',
  },
};
