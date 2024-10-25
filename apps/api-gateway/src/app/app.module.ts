import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule.register([{
    name: 'ORDERS', transport: Transport.REDIS, options: {
      host: 'redis-15277.c330.asia-south1-1.gce.redns.redis-cloud.com',
      port: 15277,
      username: "default",
      password: "VUdSokGZ3UjyVuovsPNCPS0O3fXb2jYD",
    }
  }, {
    name: 'USERS', transport: Transport.REDIS, options: {
      host: 'redis-15277.c330.asia-south1-1.gce.redns.redis-cloud.com',
      port: 15277,
      username: "default",
      password: "VUdSokGZ3UjyVuovsPNCPS0O3fXb2jYD",
    }
  },])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
