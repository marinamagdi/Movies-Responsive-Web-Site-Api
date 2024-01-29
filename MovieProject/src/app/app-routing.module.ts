import { AuthGuardService } from './auth-guard-service.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MoviesComponent } from './movies/movies.component';
import { TVComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';



const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',canActivate:[AuthGuardService],component:HomeComponent},
  {path:'moviedetails/:id/:media_type',canActivate:[AuthGuardService],component:MoviedetailsComponent},
  {path:'login',component:LoginComponent},
  {path:'settings',loadChildren:()=>import('./settings/settings.module').then((m)=>m.SettingsModule)},
  {path:'register',component:RegisterComponent},
  {path:'movies',canActivate:[AuthGuardService],component:MoviesComponent},
  {path:'tv',canActivate:[AuthGuardService],component:TVComponent},
  {path:'people',canActivate:[AuthGuardService],component:PeopleComponent},
  {path:'about',canActivate:[AuthGuardService],component:AboutComponent},
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
