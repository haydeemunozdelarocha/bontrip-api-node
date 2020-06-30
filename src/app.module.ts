import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {UsersModule} from "./users/users.module";
import { AuthModule } from './auth/auth.module';
import {AppController} from "./app.controller";

@Module({
  imports: [
      MongooseModule.forRoot("mongodb+srv://bontrip_test:Exito000@test-h224i.mongodb.net/test?retryWrites=true&w=majority"),
      UsersModule,
      AuthModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
