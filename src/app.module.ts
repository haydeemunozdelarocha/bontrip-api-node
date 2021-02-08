import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {UsersModule} from "./users/users.module";
import { AuthModule } from './auth/auth.module';
import {AppController} from "./app.controller";
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
      ConfigModule.forRoot({
          envFilePath: '.env'
      }),
      MongooseModule.forRoot("mongodb+srv://bontrip_test:Desierto0929@test.h224i.mongodb.net/test?retryWrites=true&w=majority"),
      UsersModule,
      AuthModule
],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
