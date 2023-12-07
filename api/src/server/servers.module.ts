import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServerController } from 'src/server/server.controller';
import { Server, ServerSchema } from 'src/server/schema/server.shema';
import { ServerService } from 'src/server/server.service';

@Module({
  controllers: [ServerController],
  providers: [ServerService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Server.name,
        schema: ServerSchema,
      },
    ]),
  ],
})
export class ServerModule {}
