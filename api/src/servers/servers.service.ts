import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Server, ServerModel } from 'src/servers/schema/server.shema';

@Injectable()
export class ServersService {
  constructor(
    @InjectModel(Server.name) private readonly serverModel: ServerModel,
  ) {}

  async createServer() {}
}
