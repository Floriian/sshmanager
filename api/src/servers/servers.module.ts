import { Module } from '@nestjs/common';
import { ServersService } from './servers.service';
import { ServersController } from './servers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Server, ServerSchema } from 'src/servers/schema/server.shema';

@Module({
  controllers: [ServersController],
  providers: [ServersService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Server.name,
        schema: ServerSchema,
      },
    ]),
  ],
})
export class ServersModule {}
