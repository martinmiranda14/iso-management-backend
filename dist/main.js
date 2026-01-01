"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const apiPrefix = configService.get('API_PREFIX') || 'api/v1';
    app.setGlobalPrefix(apiPrefix);
    app.enableCors({
        origin: configService.get('CORS_ORIGIN') || 'http://localhost:4200',
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle(configService.get('API_TITLE') || 'ISO Management System API')
        .setDescription(configService.get('API_DESCRIPTION') ||
        'API for ISO 27001/27002 Management System')
        .setVersion(configService.get('API_VERSION') || '1.0')
        .addBearerAuth()
        .addTag('Authentication', 'User authentication endpoints')
        .addTag('Users', 'User management endpoints')
        .addTag('Controls', 'ISO 27002 controls management')
        .addTag('Risks', 'Risk assessment and management')
        .addTag('Assets', 'Information assets management')
        .addTag('Treatment Plans', 'Risk treatment plans')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    const { apiReference } = await import('@scalar/nestjs-api-reference');
    app.use('/api/reference', apiReference({
        theme: 'purple',
        spec: {
            content: document,
        },
    }));
    const port = configService.get('PORT') || 3000;
    await app.listen(port);
    console.log(`
    🚀 Application is running on: http://localhost:${port}
    📚 API Documentation (Swagger): http://localhost:${port}/api/docs
    📖 API Reference (Scalar): http://localhost:${port}/api/reference
    🔧 API Prefix: /${apiPrefix}
  `);
}
bootstrap();
//# sourceMappingURL=main.js.map