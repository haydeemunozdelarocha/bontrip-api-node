import {Controller, UseGuards} from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { UsersService } from "./users.service";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {User} from "./user.schema";

@Crud({
    model: {
        type: User
    }
})

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
    constructor(public service: UsersService) {}
}
