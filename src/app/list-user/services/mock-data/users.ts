import { IUser } from "src/app/core/model/interface/user.interface";

export let users: IUser[] = [
  {
    id: '315768d5', type: 'user', firstName: 'm1', lastName: 'k1', email: 'm1@gmail.com', description: 'test for description', name: 'm1 k1'
  },
  {
    id: 'a096aae1', type: 'user', firstName: 'm2', lastName: 'k2', email: 'm2@gmail.com', description: 'test for description', name: 'm2 k2'
  },
  {
    id: 'userGroup_23_k', type: 'user_group', description: 'test for description', name: 'm10 k1', firstName: null, lastName: null, email: null
  },
  {
    id: 'userGroup_26_t', type: 'user_group', description: 'test for description', name: 'm20 k2', firstName: null, lastName: null, email: null
  },
]