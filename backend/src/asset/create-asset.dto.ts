import { IsEnum, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateAssetDto {
  @IsString()
  @IsNotEmpty()
  asset_name: string;

  @IsInt()
  stock_quantity: number;

  @IsEnum(['Consumable', 'Non-Consumable'])
  category: string;
}
