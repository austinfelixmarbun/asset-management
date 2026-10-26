import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AssetService } from './asset.service.js';
import { CreateAssetDto } from './create-asset.dto.js';

@Controller('asset')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @Post()
  create(@Body() createAssetDto: CreateAssetDto) {
    return this.assetService.create(createAssetDto);
  }

  @Get()
  findAll() {
    return this.assetService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<CreateAssetDto>) {
    return this.assetService.update(+id, updateData);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assetService.remove(+id);
  }
}
