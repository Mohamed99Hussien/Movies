import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GallaryComponent } from './gallary/gallary.component';
import { MoviesComponent } from './movies/movies.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TvComponent } from './tv/tv.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
{path:'', redirectTo:"home" ,pathMatch:'full'},  
{path:'home', component:HomeComponent},
{path:'about', component:AboutComponent, canActivate:[AuthGuard]},
{path:'gallary', component:GallaryComponent, canActivate:[AuthGuard]},
{path:'movies', component:MoviesComponent, canActivate:[AuthGuard]},
{path:'tv', component:TvComponent, canActivate:[AuthGuard]},
{path:'contacts', component:ContactsComponent, canActivate:[AuthGuard]},
{path:'register', component:RegisterComponent},
{path:'login', component:LoginComponent},
{path: 'settings' ,loadChildren:()=> import ('./settings/setting.module').then(x=>x.SettingModule)},

{path:'moviedetails/:id', component:MoviedetailsComponent},
{path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
