import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateServerDto } from 'src/server/dto';
import { Server, ServerModel } from 'src/server/schema/server.shema';

@Injectable()
export class ServerService {
  constructor(
    @InjectModel(Server.name) private readonly serverModel: ServerModel,
  ) {}

  async list() {
    return await this.serverModel.find();
  }

  async create(dto: CreateServerDto) {
    const server = new Server();
    Object.assign(server, dto);
    return await this.serverModel.create(server);
  }
}
