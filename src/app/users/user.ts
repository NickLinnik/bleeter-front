enum Gender {
  Male='male',
  Female='female',
  Other='other'
}

interface User {
  id: number,
  login: string,
  password: string,
  userName?: string,
  gender?: Gender,
  admin: boolean,
  createdAt: Date,
  updatedAt: Date
}

export {Gender, User}
