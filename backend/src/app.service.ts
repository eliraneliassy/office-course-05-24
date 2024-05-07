import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {

  constructor(private readonly httpService: HttpService) {}

  private BASE_URL = `https://www.googleapis.com/books/v1/volumes`;

  getBooks(query: string) {
    return this.httpService.get<any>(`${this.BASE_URL}?q=${query}`);
  }
}
