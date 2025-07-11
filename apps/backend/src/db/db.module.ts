import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: async (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get<string>('PG_HOST'),
      port: configService.get<number>('PORT'),
      username: configService.get<string>('PG_USER'),
      database: configService.get<string>('PG_DATABASE'),
      entities: [__dirname + '/entities/**'],
      migrations: [__dirname + '/migrations/*.ts'],
      synchronize: false
    }),
    inject: [ConfigService]
  })]
})
export class DbModule {}
