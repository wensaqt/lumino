import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../entities/user.entity';
import { LoginDto } from './login.dto';
import { LoginResponse } from './login-response.interface'; 

@Controller('user')
    export class UserController {
        constructor(private readonly userService: UserService) {}

        @Post('signup')
        async signUp(@Body() user: User): Promise<User> {
            console.log('user is in controller');
            return this.userService.createUser(user);
        }
        
        @Post('login')
        async signIn(@Body() loginDto: LoginDto): Promise<LoginResponse | null> {
            return this.userService.logUser(loginDto);
          }
}
