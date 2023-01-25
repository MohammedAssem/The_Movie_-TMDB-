import { Component, OnInit } from '@angular/core';
import {MoviesAPIService} from "../../shared/ervices/AllMovies/movies-api.service"

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  dataMovies:any;

  constructor(_MoviesAPI:MoviesAPIService) { 
    _MoviesAPI.getmoves("movie").subscribe((data)=>this.dataMovies=data.results,
    error=>console.log(error) 
    )

  }

  ngOnInit(): void {
  }

}
