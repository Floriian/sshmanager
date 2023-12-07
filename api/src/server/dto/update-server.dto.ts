import { PartialType } from '@nestjs/swagger';
import { CreateServerDto } from 'src/server/dto/create-server.dto';

export class UpdateServerDto extends PartialType(CreateServerDto) {}
