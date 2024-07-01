import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class CatFactsService {
  private readonly apiUrl = 'https://cat-fact.herokuapp.com/facts';

  constructor(private httpService: HttpService) {}

  async getCatFacts(): Promise<any> {
    const response: AxiosResponse<any> = await firstValueFrom(this.httpService.get(this.apiUrl));
    return response.data;
  }
}