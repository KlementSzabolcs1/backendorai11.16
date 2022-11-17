import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return {
      message: 'Hello world!',
      age: 15,
      name: 'Klement Szabolcs',
      randomhonap: Math.round(Math.random() * 13),
      randomszam1: Math.round(Math.random() * 101),
      randomszam2: Math.round(Math.random() * 101),
    };
  }
}
