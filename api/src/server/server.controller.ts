import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Server } from 'http';
import { CreateServerDto } from 'src/server/dto';
import { ServerService } from 'src/server/server.service';

@Controller('server')
@ApiTags('Server')
export class ServerController {
  constructor(private readonly serverService: ServerService) {}

  @Get('/list')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: Server,
  })
  list() {
    return this.serverService.list();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({ type: Server })
  create(@Body() dto: CreateServerDto) {
    return this.serverService.create(dto);
  }
}
