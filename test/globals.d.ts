  declare namespace NodeJS {
    interface Global {
      //para sobrescrever uma variável global, o import deve ser inline, caso contrário, ficaria apenas local
      testRequest: import('supertest').SuperTest<import('supertest').Test>;
    }
  }