import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { knife4jSetup } from 'nest-knife4j'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const options = new DocumentBuilder()
    .setTitle('nest knife4j 接口文档')
    .setDescription('Knife4j是一个集Swagger2 和 OpenAPI3 为一体的增强解决方案')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)
  knife4jSetup(app, [
    {
      name: '2.X版本',
      url: `/api-json`,
      swaggerVersion: '2.0',
      location: `/api-json`,
    },
  ])
  await app.listen(3002)
}
bootstrap()
