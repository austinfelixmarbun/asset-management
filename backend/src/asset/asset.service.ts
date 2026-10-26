import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asset } from './asset.entity.js';
import { CreateAssetDto } from './create-asset.dto.js';

@Injectable()
export class AssetService {
  constructor(
    @InjectRepository(Asset)
    private assetRepository: Repository<Asset>,
  ) {}

  create(createAssetDto: CreateAssetDto) {
    return this.assetRepository.save(createAssetDto);
  }

  findAll() {
    return this.assetRepository.find();
  }

  update(id: number, updateDate: Partial<CreateAssetDto>) {
    return this.assetRepository.update(id, updateDate);
  }

  remove(id: number) {
    return this.assetRepository.delete(id);
  }
}
