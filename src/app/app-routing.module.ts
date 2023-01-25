import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { AllMoviesComponent } from './components/Tempo/all-movies/all-movies.component';
import { MoviesComponent } from './components/Tempo/movies/movies.component';
import { ShowVideoComponent } from './components/Tempo/show-video/show-video.component';
import { TvComponent } from './components/Tempo/tv/tv.component';

const routes: Routes = [
  {path:"" ,pathMatch:"full",redirectTo:"AllMovis"},
  {path:"home",component:HeaderComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"AllMovis",component:AllMoviesComponent},
  {path:"ShowVideo/:id/:type",component:ShowVideoComponent},
  {path:"movies",component:MoviesComponent},
  {path:"tv",component:TvComponent},
  {path:"**",component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
