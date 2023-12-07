import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoConfig } from 'src/configs';
import { EnvModule } from 'src/env/env.module';
import { envSchema } from 'src/env/env.schema';
import { ServerModule } from 'src/server/servers.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    EnvModule,
    MongooseModule.forRootAsync(mongoConfig),
    ServerModule,
  ],
})
export class AppModule {}
