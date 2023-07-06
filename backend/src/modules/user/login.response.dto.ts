import { User } from '../../entities/user.entity'

export default class LoginResponseDto {
    user: User;
    token: string;

    constructor(user: User, token: string) {
        this.user = user;
        this.token = token;
    }
}