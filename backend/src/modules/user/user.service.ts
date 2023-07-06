import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { User } from '../../entities/user.entity';
import * as jwt from 'jsonwebtoken';
import SignUpDto from './signup.dto'
import { LoginDto } from './login.dto';
import LoginResponseDto from './login.response.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
    ) {}

    async createUser(user: SignUpDto): Promise<User> {
        console.log('user is in service');

        // Creates a literal object based on the user data
        const userData = {
            username: user.username,
            email: user.email,
            password: user.password
        };

        return await this.userModel.create(userData);
    }

    async logUser(credentials: LoginDto): Promise<LoginResponseDto | null> {
        const { identifier, password } = credentials;
    
        const user = await this.findUserToLogin(identifier);
    
        if (!user) {
            console.log('user not found');
            return null;
        }
    
        if(user.password !== password) {
            console.log('incorrect password');
            return null;
        }
        
        const token = jwt.sign({ userId: user.id }, 'your-secret-key', { expiresIn: '1h' });
        console.log('logged user is : ' + user);
        return new LoginResponseDto(user, token);
    }
    
    private async findUserToLogin(identifier: string): Promise<User | null> {
        const user = await this.userModel.findOne({
            where: {
                [Op.or]: [
                    { username: identifier },
                    { email: identifier },
                ],
            },
        });
        return user;
    }

    findAll(): Promise<User[]> {
        return this.userModel.findAll();
    }
}