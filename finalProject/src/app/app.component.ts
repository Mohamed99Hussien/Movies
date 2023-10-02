import { Component } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'finalProject';

  // constructor(private _AuthService: AuthService){

  //   _AuthService.userData.subscribe(()=>{
  //     if(_AuthService.userData.getValue() != null)
  //     {
  //       setTimeout(()=>{console.log("Hello")},5000);
  //     }
  //   })
  // }

}
