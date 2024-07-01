import { Controller, Get } from '@nestjs/common';
import { CatFactsService } from './cat-facts.service';

@Controller('cat-facts')
export class CatFactsController {
  constructor(private readonly catFactsService: CatFactsService) {}

  @Get()
  async getCatFacts() {
    return await this.catFactsService.getCatFacts();
  }
}
