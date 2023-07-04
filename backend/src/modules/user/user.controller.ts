import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../entities/user.entity';

@Controller('user')
    export class UserController {
        constructor(private readonly userService: UserService) {}

        @Post('signup')
        async signUp(@Body() user: User): Promise<User> {
            console.log('user is in controller');
            return this.userService.createUser(user);
        }
}
