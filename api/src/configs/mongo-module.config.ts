import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { EnvModule } from 'src/env/env.module';
import { EnvService } from 'src/env/env.service';

export const mongoConfig: MongooseModuleAsyncOptions = {
  imports: [EnvModule],
  useFactory: async (envService: EnvService) => ({
    uri: envService.get('MONGO_URI'),
  }),
  inject: [EnvService],
};
