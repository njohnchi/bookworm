import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class BooksService {
  private readonly apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private readonly httpService: HttpService) {}

  async searchBooks(query: string): Promise<any[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<any[]>(`${this.apiUrl}?q=${query}`).pipe(
        catchError(() => {
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }

  async getBookById(id: string): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService.get<any>(`${this.apiUrl}/${id}`).pipe(
        catchError(() => {
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}
