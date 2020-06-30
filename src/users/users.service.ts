import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {UserInput} from "./user.input";
import {User} from "./user.schema";
import {Model} from "mongoose";
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOne(username: string): Promise<User> {
        return this.userModel.findOne({
            username: username
        });
    }

    async create(userData: UserInput): Promise<User> {
        const createdUser = new this.userModel(userData);
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(userData.password, salt);

        createdUser.email = userData.email;
        createdUser.subscription_type = userData.subscription_type;
        createdUser.password = hash;
        return createdUser.save();
    }
}
