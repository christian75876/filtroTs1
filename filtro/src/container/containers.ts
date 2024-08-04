import { container } from "tsyringe";
import { UserService } from "../services/user.service";
import { UserController } from "../controllers/user.controller";
import { UserReppository } from "../repositories/user.repository";
import { AuthController } from "../controllers/auth.controller";
import { AuthServices } from "../services/auth.service";

container.register(UserService, { useClass: UserService });
container.register(UserController, { useClass: UserController });
container.register(UserReppository, { useClass: UserReppository });
container.register(AuthController, { useClass: AuthController });
container.register(AuthServices, { useClass: AuthServices });
