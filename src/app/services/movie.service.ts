import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieResponse } from '../model/movieResponse';
import { environment } from 'src/environments/environment';
import { Movie } from '../model/movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiPopular = environment.apiUrl + '/api/movies/popular';
  private apiUpcoming = environment.apiUrl + '/api/movies/upcoming';
  private apiNowPlaying = environment.apiUrl + '/api/movies/now_playing';
  private apiProfiles = environment.apiUrl + '/api/movies/';
  private apisearch = environment.apiUrl + '/api/movies/search';
  private apiSimilar = environment.apiUrl + '/api/movies/similar/';

  constructor(private http: HttpClient) { }


  getPopularMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.apiPopular);
  }

  getNowPlaying(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.apiNowPlaying);
  }

  getUpcomingMovies(): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.apiUpcoming);
  }
  getProfileMovies(id: number): Observable<Movie> {
    return this.http.get<Movie>(this.apiProfiles + id);
  }

  getSearchMovies(query: string): Observable<MovieResponse> {
    const url = this.apisearch + '?movieName=' + query;
    return this.http.get<MovieResponse>(url);
  }

  getMovieIdFromProfile(id: string): Observable<number> {
    return this.http.get<number>(`${this.apiProfiles}${id}/movie_id`);
}

  getSimilarMovies(id: number): Observable<MovieResponse> {
    return this.http.get<MovieResponse>(this.apiSimilar + id);
  }
  
}