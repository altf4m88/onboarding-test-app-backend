import { Controller, Get, UseGuards } from '@nestjs/common';
import { CatFactsService } from './cat-facts.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('cat-facts')
export class CatFactsController {
  constructor(private readonly catFactsService: CatFactsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getCatFacts() {
    return await this.catFactsService.getCatFacts();
  }
}
