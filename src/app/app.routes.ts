import { Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
export const routes: Routes = [ {path:'',component:MovieListComponent},  { path: 'movie-detail/:id', component: MovieDetailComponent },];
