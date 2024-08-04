import { injectable } from "tsyringe";
import { User } from "../model/user.model";
import { Iuser } from "../interface/user.interface";

@injectable()
export class UserReppository {
  async getAll(): Promise<User[]> {
    return User.findAll();
  };

  async getUserById(id: number): Promise<User | null> {
    return User.findByPk(id);
  };

  async createUser({ email, password}: Iuser): Promise<User> {
    return User.create({email, password});
  };

  async getUserByEmail(email: string): Promise<User | null>{
    return User.findOne({ where: { email } });
  }

}
