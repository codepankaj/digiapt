import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  constructor(private router: Router) { }
 
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  loginUser(e){
    e.preventDefault();
    console.log(e);
    var email = e.target.elements[0].value;
    var password = e.target.elements[1].value;
 
    if (email == 'admin@gmail.com' && password == 'admin'){
     this.router.navigate(['users']); 
    }
   }
  ngOnInit() {}

}
