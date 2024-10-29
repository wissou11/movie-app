import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeadBarComponent } from '../head-bar/head-bar.component';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, HeadBarComponent],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  movieId: any;
  movie$= new Observable<Movie | undefined>;

  constructor(private route: ActivatedRoute, private movieservice: MovieService){}
  ngOnInit(): void{
    this.movieId=this.route.snapshot.paramMap.get('id');
    if(this.movieId){
      this.movie$=this.movieservice.getMovieById(parseInt(this.movieId));
    }
    else{
      console.error('No Movie found');
    }
  }
}
