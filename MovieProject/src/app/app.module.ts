import { ApikeyInterceptor } from './apikey.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TVComponent } from './tv/tv.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MediaItemComponent } from './media-item/media-item.component';

import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { WatchPipe } from './watch.pipe';
import { SeemorePipe } from './seemore.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    MoviesComponent,
    NotFoundComponent,
    PeopleComponent,
    RegisterComponent,
    TVComponent,
    MediaItemComponent,
    
    MoviedetailsComponent,
         WatchPipe,
         SeemorePipe,
         SearchPipe,
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:ApikeyInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
