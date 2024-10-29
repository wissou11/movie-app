import { Component } from '@angular/core';
import { Movie } from '../movie';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';
import { SearchBarComponent } from "../search-bar/search-bar.component";
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [SearchBarComponent, RouterModule, CommonModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies$ = new Observable<Movie[]>;
  constructor(private movieService: MovieService, private router: Router) {}
  ngOnInit(): void {
    this.movies$=this.movieService.getMovieList();
  }

  onSearch(title: string) {
    if (title) {
      this.movies$=this.movieService.getMovieByTitle(title);
    } else {
      this.movies$=this.movieService.getMovieList();
    }
  }
  onMovieClick(movie: Movie): void {
    this.router.navigate(['/movie-detail', movie.id]);
  }
}
