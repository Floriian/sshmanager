import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ServersService } from './servers.service';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Server } from 'src/servers/schema/server.shema';
import { CreateServerDto } from 'src/servers/dto';

@Controller('servers')
@ApiTags('Servers')
export class ServersController {
  constructor(private readonly serversService: ServersService) {}

  @Get('/list')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: Server,
  })
  list() {
    return this.serversService.list();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({ type: Server })
  create(@Body() dto: CreateServerDto) {
    return this.serversService.create(dto);
  }
}
