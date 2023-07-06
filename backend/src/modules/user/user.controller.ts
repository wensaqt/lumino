import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../entities/user.entity';
import { LoginDto } from './login.dto';
import LoginResponseDto from './login.response.dto';
import SignUpDto from './signup.dto';

@Controller('user')
    export class UserController {
        constructor(private readonly userService: UserService) {}

        @Post('signup')
        async signUp(@Body() signUpDto: SignUpDto): Promise<User> {
            console.log('user is in controller');
            return this.userService.createUser(signUpDto);
        }
        
        @Post('login')
        async signIn(@Body() loginDto: LoginDto): Promise<LoginResponseDto | null> {
            return this.userService.logUser(loginDto);
        }
}
