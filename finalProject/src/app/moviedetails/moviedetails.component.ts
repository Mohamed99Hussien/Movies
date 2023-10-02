import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent {

  imgPrefix : string = 'https://image.tmdb.org/t/p/w500';
  id :number = 0;
  movieDetail :any ={};
  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService){
    this.id = _ActivatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    
    this._MoviesService.getMoviesDetails(this.id).subscribe((response)=>{
      this.movieDetail =response;
    })
  }
}
