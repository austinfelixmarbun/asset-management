import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'asset' })
export class Asset {
  @PrimaryGeneratedColumn({ name: 'asset_id' })
  asset_id: number;

  @Column({ name: 'asset_name' })
  asset_name: string;

  @Column({ name: 'stock_quantity' })
  stock_quantity: number;

  @Column({
    type: 'enum',
    enum: ['Consumable', 'Non-Consumable'],
  })
  category: string;
}
