import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ControlsModule } from './controls/controls.module';
import { DocumentsModule } from './documents/documents.module';

@Module({
  imports: [
    // Configuration module
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    // Database module
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const dbType = configService.get<string>('DB_TYPE', 'sqlite');

        return {
          type: dbType as 'sqlite' | 'postgres',
          database: configService.get<string>('DB_DATABASE', 'iso-management.db'),
          host: configService.get<string>('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get<string>('DB_USERNAME'),
          password: configService.get<string>('DB_PASSWORD'),
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: configService.get('NODE_ENV') === 'development',
          logging: configService.get('NODE_ENV') === 'development',
        };
      },
      inject: [ConfigService],
    }),

    UsersModule,

    AuthModule,

    ControlsModule,

    DocumentsModule,

    // Feature modules will be added here
    // RisksModule,
    // AssetsModule,
    // TreatmentPlansModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
