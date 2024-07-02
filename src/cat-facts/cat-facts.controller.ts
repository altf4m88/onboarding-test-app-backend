import { Controller, Get, UseGuards, UseInterceptors } from '@nestjs/common';
import { CatFactsService } from './cat-facts.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CatFactsInterceptor } from '../interceptors/cat-facts.interceptor';

@Controller('cat-facts')
@UseInterceptors(CatFactsInterceptor)
export class CatFactsController {
  constructor(private readonly catFactsService: CatFactsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getCatFacts() {
    return await this.catFactsService.getCatFacts();
  }
}
