import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {User, UserSchema} from "./user.schema";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";

@Module({
  imports: [
      MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  exports: [
    UsersService
  ],
  controllers: [UsersController],
  providers: [UsersService, JwtAuthGuard]
})
export class UsersModule {}
