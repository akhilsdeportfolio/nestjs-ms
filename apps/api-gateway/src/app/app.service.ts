import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import os from 'node:os';

@Injectable()
export class AppService {

  constructor(
    @Inject('ORDERS') private ordersClient: ClientProxy, @Inject('USERS') private usersClient: ClientProxy,
  ) { }

  getData(): { message: string } {

    this.ordersClient.emit('order_created', {
      "System Information": {
        "arch": os.arch(),
        "platform": os.platform(),
        "type": os.type(),
        "time": new Date().toISOString(),
      }
    });

    this.usersClient.emit('user_created', {
      "System Information": {
        "arch": os.arch(),
        "platform": os.platform(),
        "type": os.type(),
        "time": new Date().toISOString(),
      }
    });

    return ({ message: 'Hello API' });
  }
}
