import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';


@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getBooks')
  getBooks(query: string): Observable<AxiosResponse<any>> {
    return this.appService.getBooks(query);
  }
}
