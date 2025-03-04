import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { map, tap } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root',
})
export class BooksApiService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.apiUrl}/books`);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/books/${id}`).pipe(catchError((err) => {
      throw new Error('Une erreur est survenue:', err)
    }));
  }

  create(book: Book): Observable<{ id: number }> {
    return this.http
      .post<{ ressource_location: number }>(this.apiUrl + '/books', book)
      .pipe(
        map((data) => ({ id: data.ressource_location })),
        tap((data) => console.log('data:', data))
      );
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/books/${id}`);
  }
}