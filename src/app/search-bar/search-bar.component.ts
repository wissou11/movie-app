import { Component, EventEmitter, Output } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  constructor(private movieService: MovieService) {}
  @Output() titleSearch = new EventEmitter<string>();
  onKeyPress(event:KeyboardEvent, titre: string){
    if(event.key !=='Enter') return;
    this.titleSearch.emit(titre);
  }

  onBackspace(titre: string){
    this.titleSearch.emit(titre);
  }

}
