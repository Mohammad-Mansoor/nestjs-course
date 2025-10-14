import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  getHello(): string {
    return 'Hello Nest JS!!';
  }

  getUserByName(name: string): string {
    return `Hello ${name}`;
  }
}
