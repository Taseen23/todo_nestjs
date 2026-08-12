// import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'dehan',
  password: '1234',
  database: 'todo',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrationsTableName: 'migration',
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
};

const AppDataSource = new DataSource(config);

export { AppDataSource };
export default config as TypeOrmModuleOptions;
