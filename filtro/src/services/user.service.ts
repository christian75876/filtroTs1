import { inject, injectable } from "tsyringe";
import { UserReppository } from "../repositories/user.repository";
import { User } from "../model/user.model";
import { Iuser } from "../interface/user.interface";

@injectable()
export class UserService {
  constructor(
    @inject(UserReppository) private userReppository: UserReppository
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userReppository.getAll();
  };

  async getUserById(id: number): Promise<User | null> {
    return this.userReppository.getUserById(id);
  };

  async createUser({ email, password }: Iuser): Promise<User> {
    return this.userReppository.createUser({email, password});
  };

  async findByEmail(email:string): Promise<User | null> {
    return this.userReppository.getUserByEmail(email);
  };
}
