import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { MoviesAPIService } from '../../shared/ervices/AllMovies/movies-api.service';

@Component({
  selector: 'app-show-video',
  templateUrl: './show-video.component.html',
  styleUrls: ['./show-video.component.css']
})
export class ShowVideoComponent implements OnInit {
  
  IdMovies:any;
  typeMovies:any;
  AllDataMovie:any;
  constructor(private _ActivatedRoute:ActivatedRoute,
    private _MoviesAPIService:MoviesAPIService) 
  {
   this.IdMovies= _ActivatedRoute.snapshot.paramMap.get("id") 
   this.typeMovies= _ActivatedRoute.snapshot.paramMap.get("type") 
    this._MoviesAPIService.showMovie(this.IdMovies,this.typeMovies).
    subscribe((data)=>this.AllDataMovie=data,
    error=>(console.log(error)), 
    )
  }

  ngOnInit(): void {
  }

}
