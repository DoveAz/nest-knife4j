import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiExtension, ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('小猫咪')
@Controller('cat')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiExtension('x-author', 'DoveAz')
  @ApiOperation({
    summary: '哈哈',
    description: '你好啊',
  })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
