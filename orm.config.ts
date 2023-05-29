import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'sqlite',
  database: '.db/compass',
  synchronize: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
}