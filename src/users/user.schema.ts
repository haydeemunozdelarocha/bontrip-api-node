import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {IsEmail, IsHash } from "class-validator";

@Schema()
export class User extends Document {
    @Prop({ required: true })
    @IsEmail()
    email: string;

    @Prop({ required: true })
    @IsHash('bcrypt')
    password: string;

    @Prop({ required: true })
    subscription_type: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
