import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Global prefix for all routes
  const apiPrefix = configService.get('API_PREFIX') || 'api/v1';
  app.setGlobalPrefix(apiPrefix);

  // CORS configuration
  app.enableCors({
    origin: configService.get('CORS_ORIGIN') || 'http://localhost:4200',
    credentials: true,
  });

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  // Swagger/OpenAPI configuration
  const config = new DocumentBuilder()
    .setTitle(configService.get('API_TITLE') || 'ISO Management System API')
    .setDescription(
      configService.get('API_DESCRIPTION') ||
        'API for ISO 27001/27002 Management System',
    )
    .setVersion(configService.get('API_VERSION') || '1.0')
    .addBearerAuth()
    .addTag('Authentication', 'User authentication endpoints')
    .addTag('Users', 'User management endpoints')
    .addTag('Controls', 'ISO 27002 controls management')
    .addTag('documents', 'ISO 27001 document management (policies and procedures)')
    .addTag('Risks', 'Risk assessment and management')
    .addTag('Assets', 'Information assets management')
    .addTag('Treatment Plans', 'Risk treatment plans')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Serve Swagger UI at /api/docs
  SwaggerModule.setup('api/docs', app, document);

  // Serve Scalar API Reference at /api/reference
  const { apiReference } = await import('@scalar/nestjs-api-reference');
  app.use(
    '/api/reference',
    apiReference({
      theme: 'purple',
      spec: {
        content: document,
      },
    } as any),
  );

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
