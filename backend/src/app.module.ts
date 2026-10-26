import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asset } from './asset/asset.entity.js';
import { AssetModule } from './asset/asset.module.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'asset_fumindo',
      entities: [Asset],
      synchronize: true,
    }),
    AssetModule,
  ],
})
export class AppModule {}
