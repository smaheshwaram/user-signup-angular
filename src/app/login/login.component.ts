import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {UserModel} from '../generated/userservice';
import {UserServiceValues} from '../interfaces/user-interface';
import {DataService} from '../data.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterContentChecked {

  title = 'User Login';
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  userRequest: UserServiceValues;
  userModel: UserModel;

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
  }

  loginUser(): void {
    this.userRequest = new UserServiceValues();
    this.userRequest.userName = this.loginForm.get('username').value;
    this.userRequest.password = this.loginForm.get('password').value;
    this.userRequest.userAddress = '567 fruity';
    this.dataService.postUser(this.userRequest).subscribe(newUserModel => {
      this.userModel = newUserModel;
      alert('Login in is successful ' + this.userRequest.userName);
      this.router.navigate(['']);
    }, error => {
      console.log(error.error.message);
    });
  }

  ngAfterContentChecked(): void {
  }
}

