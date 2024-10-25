/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.REDIS, options: {
      host: 'redis-15277.c330.asia-south1-1.gce.redns.redis-cloud.com',
      port: 15277,
      username: "default",
      password: "VUdSokGZ3UjyVuovsPNCPS0O3fXb2jYD",
    }
  });
  await app.listen();
  Logger.log(
    `Users is running`
  );
}

bootstrap();
