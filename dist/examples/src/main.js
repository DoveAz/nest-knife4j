"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const nest_knife4j_1 = require("nest-knife4j");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    nest_knife4j_1.knife4jSetup(app, {
        urls: [
            {
                name: '2.X版本',
                url: `/api-json`,
                swaggerVersion: '3.0',
                location: `/api-json`,
            },
        ],
    });
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map