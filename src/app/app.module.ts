import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavberComponent } from './components/navber/navber.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AllMoviesComponent } from './components/Tempo/all-movies/all-movies.component';
import { ShowVideoComponent } from './components/Tempo/show-video/show-video.component';
import { MoviesComponent } from './components/Tempo/movies/movies.component';
import { TvComponent } from './components/Tempo/tv/tv.component';
import {TranslateLoader, TranslateModule}from '@ngx-translate/core'
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { SearchDataPipe } from './search-data.pipe'

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http,"../assets/Lang/",".json")
}


@NgModule({
  declarations: [
    AppComponent,
    NavberComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    NotfoundComponent,
    RegisterComponent,
    AllMoviesComponent,
    ShowVideoComponent,
    MoviesComponent,
    TvComponent,
    SearchDataPipe, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        deps:[HttpClient]

      }
    })

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
