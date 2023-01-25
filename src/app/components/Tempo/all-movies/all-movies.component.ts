import { Component, OnInit } from '@angular/core';
import { MoviesAPIService } from '../../shared/ervices/AllMovies/movies-api.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  dataAllMovis:any;
  serchs:string='';
  constructor(private _MoviesAPIService:MoviesAPIService) {

    _MoviesAPIService.getDataAllMov().subscribe(
      (data)=>this.dataAllMovis= data.results,
      error => console.log(error)
      )
   }

  ngOnInit(): void {
  }



}
