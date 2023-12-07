import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { swaggerModuleConfig, validationPipeConfig } from 'src/configs';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(validationPipeConfig));

  const document = SwaggerModule.createDocument(app, swaggerModuleConfig);
  SwaggerModule.setup('docs', app, document);

  app.setGlobalPrefix('/api');

  await app.listen(3000);
}
bootstrap();
