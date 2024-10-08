import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('test') //테스트를 위한 컨트롤러
export class TestController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getTest(); //app.service.ts에 추가했던 GetTest()
  }
  @Get('query-test')
  getTest(@Query('query') query: string): string {
    return `입력받은 쿼리는 ${query}입니다.`;
  }
  @Get('middleware-test')
  getTestMiddleware(): string {
    console.log('middleware-test 컨트롤러');
    return 'middleware-test 컨트롤러';
  }
  @Get('middleware-test2')
  getTestMiddleware2(): string {
    console.log('middleware-test2 컨트롤러');
    return 'middleware-test2 컨트롤러';
  }
}

// @Controller('user')
// export class UserController {
  // constructor(private readonly userService: UserService) {}

  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
// }