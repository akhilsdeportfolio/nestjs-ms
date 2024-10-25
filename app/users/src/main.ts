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
      host: 'redis-13705.c305.ap-south-1-1.ec2.redns.redis-cloud.com',
      port: 13705,
      username: "default",
      password: "CmErQ9pfUcp87kSsjpD5JOhe6FjQfjXs",
    }
  });
  await app.listen();
  Logger.log(
    `Users is running`
  );
}

bootstrap();
