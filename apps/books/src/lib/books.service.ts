import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, of } from 'rxjs';
import { Book } from './book.interface';
import { BOOKS_MOCK } from './books.mock';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  httpClient = inject(HttpClient);

  private BASE_URL = `https://www.googleapis.com/books/v1/volumes`

  getBooks(query: string): Observable<Book[]> {
    let params = new HttpParams();
    params = params.append('q', query)

     // this.httpClient.get<any>(this.BASE_URL, {params})
    return of(BOOKS_MOCK)
       .pipe(
        map((res: any) => res.items),
        map((items: any[]) => items.map(item => ({
          id: item.id,
          title: item.volumeInfo.title,
          description: item.volumeInfo.description,
          imageUrl: item.volumeInfo.imageLinks.thumbnail,
          price: item.volumeInfo.pageCount
        })))
      )
  }
}
