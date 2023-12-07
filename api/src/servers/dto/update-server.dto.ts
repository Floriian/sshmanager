import { PartialType } from '@nestjs/swagger';
import { CreateServerDto } from 'src/servers/dto/create-server.dto';

export class UpdateServerDto extends PartialType(CreateServerDto) {}
