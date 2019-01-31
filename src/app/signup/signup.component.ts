import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {UserModel} from '../generated/userservice';
import {UserServiceValues} from '../interfaces/user-interface';
import {DataService} from '../data.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterContentChecked {

  title = 'User Sign up';
  signUpForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    userAddress: new FormControl(''),
    email: new FormControl(''),
  });

  userRequest: UserServiceValues;
  userModel: UserModel;

  constructor(private dataService: DataService,
              private router: Router) { }

  ngOnInit() {
  }

  signUpUser(): void {
    this.userRequest = new UserServiceValues();
    this.userRequest.userName = this.signUpForm.get('username').value;
    this.userRequest.password = this.signUpForm.get('password').value;
    this.userRequest.userAddress = this.signUpForm.get('userAddress').value;
    this.userRequest.email = this.signUpForm.get('email').value;
    this.dataService.postUser(this.userRequest).subscribe(newUserModel => {
      this.userModel = newUserModel;
      alert('Sign up is successful ' + this.userRequest.userName);
      this.router.navigate(['']);
    }, error => {
      console.log(error.error.message);
    });
  }

  ngAfterContentChecked(): void {
  }
}

