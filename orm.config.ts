import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'sqlite',
  database: '.db/compass',
  synchronize: true,
  entities: [__dirname + 'src/app/*/entity/*.entity{.ts,.js}'],
}