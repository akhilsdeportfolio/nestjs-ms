import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule.register([{
    name: 'ORDERS', transport: Transport.REDIS, options: {
      host: 'redis-13705.c305.ap-south-1-1.ec2.redns.redis-cloud.com',
      port: 13705,
      username: "default",
      password: "CmErQ9pfUcp87kSsjpD5JOhe6FjQfjXs",
    }
  }, {
    name: 'USERS', transport: Transport.REDIS, options: {
      host: 'redis-13705.c305.ap-south-1-1.ec2.redns.redis-cloud.com',
      port: 13705,
      username: "default",
      password: "CmErQ9pfUcp87kSsjpD5JOhe6FjQfjXs",
    }
  },])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
