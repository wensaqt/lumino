import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../entities/user.entity';

// Keep using the UserCreationAttrs interface
interface UserCreationAttrs {
    username: string;
    email: string;
    password: string;
}

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) {}

    async createUser(user: UserCreationAttrs): Promise<User> {
        console.log('user is in service');

        // Creates a literal object based on the user data
        const userData = {
            username: user.username,
            email: user.email,
            password: user.password
        };

        return await this.userModel.create(userData);
    }

    findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }
}