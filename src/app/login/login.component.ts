import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {UserModel} from '../generated/userservice';
import {UserServiceValues} from '../interfaces/user-interface';
import {DataService} from '../data.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterContentChecked {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  userRequest: UserServiceValues;
  userModel: UserModel;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  signUpUser(): void {
    this.userRequest = new UserServiceValues();
    this.userRequest.userName = this.loginForm.get('username').value;
    this.userRequest.password = this.loginForm.get('password').value;
    this.userRequest.userAddress = '567 fruity';
    this.dataService.postUser(this.userRequest).subscribe(newUserModel => {
      this.userModel = newUserModel;
      alert('Sign up is successful ' + this.userRequest.userName);
    }, error => {
      console.log(error.error.message);
    });
  }

  ngAfterContentChecked(): void {
  }
}

