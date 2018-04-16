import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  isFormSubmitted = false;

  user = new User(0, '', '', '', '', '', false);

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  registration(){
  }

  onFormSubmit(form : NgForm){
    this.isFormSubmitted = false;
    if(form.valid){
      return;
    }
    this.isFormSubmitted = true;
    this.user = form.value;
    this.user.id = (localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')).length + 1 : 1;
    this.user.isActive = true;
    this.userService.createUser(this.user);
  }

}
