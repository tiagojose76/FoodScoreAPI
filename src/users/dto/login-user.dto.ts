import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Email do usuário' })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Senha do usuário' })
  password: string;
}
