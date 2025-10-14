import { Controller, Get, Param } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller('hello')
export class HelloController {
  constructor(private helloService: HelloService) {}
  @Get('/')
  getHello(): string {
    return this.helloService.getHello();
  }

  @Get('/user/:name')
  getUserByName(@Param('name') name: string): string {
    return this.helloService.getUserByName(name);
  }
}
