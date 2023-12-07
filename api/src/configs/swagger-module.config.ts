import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerModuleConfig = new DocumentBuilder()
  .setTitle('SSH-Manager API')
  .setVersion('0.0.1')
  .build();
