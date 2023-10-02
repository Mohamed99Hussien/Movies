

import { Component } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService, private _Router:Router){}
  
  error:string="";

  loginForm:FormGroup=new FormGroup({
    email     :new FormControl(null, [Validators.required, Validators.email]),
    password  :new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z]{2,5}$/)]),
  });

  SubmitLogin(formInfo:FormGroup){
      this._AuthService.login(formInfo.value).subscribe(
      (response)=>{
        if (response.message == "succes")
        { 
          localStorage.setItem('userToken', JSON.stringify (response.token));

          this._AuthService.setUserData();

          /// Wadih li loh\gin 
          this._Router.navigate(["/home"]);
        }
        else
        {
          this.error="Email or passowed wrong ";
        }
      }
      
      );
  }
  

}
