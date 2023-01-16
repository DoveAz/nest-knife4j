import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { AppService } from './app.service'
import {
  ApiExtension,
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger'
import { Cat } from './cat.entity'
import { Pagination } from './cat.dto'

@ApiTags('小猫咪')
@Controller('cat')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: '列表',
  })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: [Cat],
  })
  index(@Query() query: Pagination): string {
    console.log(query)
    return this.appService.getHello()
  }

  @Post()
  @ApiExtension('x-author', 'DoveAz')
  @ApiExtension('x-consumes', 'application/json')
  @ApiOperation({
    summary: '创建',
  })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Cat,
  })
  create(@Body() data: Cat): string {
    console.log(data)
    return this.appService.getHello()
  }
}
