import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieUrl ='assets/movies.json';

  constructor(private http: HttpClient) { }

  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.movieUrl);
  }

  getMovieById(id: number): Observable<Movie | undefined> {
    return this.http.get<Movie[]>(this.movieUrl).pipe(
      map(movies => movies.find(movie => movie.id === id))
    )
  }

  getMovieByTitle(title: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.movieUrl).pipe(
      map(movies => movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase())))
    );
  }

}
