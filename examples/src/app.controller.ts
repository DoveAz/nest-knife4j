import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('小猫咪')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary: '哈哈',
  })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
