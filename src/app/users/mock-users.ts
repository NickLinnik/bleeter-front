import {Gender, User} from "./user";

const users: User[] = [
  {
    id: 0,
    login: 'Chokidar',
    password: 'qwerty1',
    userName: 'Usepolling',
    gender: Gender.Male,
    admin: true,
    createdAt: new Date(2022, 2, 23),
    updatedAt: new Date(2022, 2, 28)
  },
  {
    id: 1,
    login: 'Albertu',
    password: 'qwerty2',
    userName: 'Alba',
    gender: Gender.Male,
    admin: false,
    createdAt: new Date(2022, 2, 24),
    updatedAt: new Date(2022, 2, 26)
  },
  {
    id: 2,
    login: 'Gertrude',
    password: 'qwerty3',
    gender: Gender.Female,
    admin: false,
    createdAt: new Date(2022, 2, 27),
    updatedAt: new Date(2022, 2, 28)
  },
  {
    id: 3,
    login: 'Poncha',
    password: 'qwerty4',
    userName: 'Panzerschreck',
    gender: Gender.Other,
    admin: false,
    createdAt: new Date(2022, 2, 25),
    updatedAt: new Date(2022, 2, 26)
  }
]

export {users}
