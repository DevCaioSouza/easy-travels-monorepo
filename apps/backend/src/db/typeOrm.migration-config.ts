import { ConfigService } from '@nestjs/config'
import { config } from 'dotenv'
import { DataSourceOptions, DataSource } from 'typeorm'

config()

const configService = new ConfigService()

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.get<string>('PG_HOST'),
  port: configService.get<number>('PORT'),
  username: configService.get<string>('PG_USER'),
  database: configService.get<string>('PG_DATABASE'),
  entities: [],
  migrations: [__dirname + '/migrations/*.ts'],
  synchronize: false
}

const dataSource = new DataSource(dataSourceOptions)

export default dataSource


