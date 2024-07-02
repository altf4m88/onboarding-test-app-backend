import { IsString, Matches, MinLength } from 'class-validator';

export class RegisterDto {
    @IsString()
    username: string;
        
    @IsString()
    @MinLength(6)
    @Matches(/(?=.*[a-z])/, { message: 'Password must contain at least one lowercase letter' })
    @Matches(/(?=.*[A-Z])/, { message: 'Password must contain at least one uppercase letter' })
    @Matches(/(?=.*[0-9])/, { message: 'Password must contain at least one number' })
    @Matches(/(?=.*[$%&()*+,.\/:;?@[\]^_{|}~])/, { message: 'Password must contain at least one special character' })
    password: string;
}
