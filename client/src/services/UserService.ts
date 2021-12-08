import { AxiosResponse } from 'axios';
import api from '../http';
import { IUser } from '../models/IUser';

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
    return api.post<IUser[]>('/users');
  }
}
