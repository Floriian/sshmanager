import { IsNotEmpty, IsString } from 'class-validator';

export class CreateServerDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsString()
  password: string;
}
