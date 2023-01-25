import { Component, OnInit } from '@angular/core';
import {MoviesAPIService} from '../../shared/ervices/AllMovies/movies-api.service'

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {
  dataMovies:any;

  constructor(_MoviesAPI:MoviesAPIService) { 
    _MoviesAPI.getmoves("tv").subscribe((data)=>this.dataMovies=data.results,
    error=>console.log(error),
    ()=>console.log("Done")
    )

  }

  ngOnInit(): void {
  }

}
