import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {ErrorType} from './error-type.enum';

@Component({
  selector: 'aem-login',
  templateUrl: './login.page.html',
  styles: [
    `.error-msg {
      color: red;
    }`]
})
export class LoginPage implements OnInit {

  isDashboard: boolean;
  form: FormGroup;
  isLoading: boolean = false;
  errorType: ErrorType;

  constructor(private router: Router,
              private fb: FormBuilder,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.isDashboard = false;
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submit() {
    let fv = this.form.value;

    this.isLoading = true;

    this.authService.login(fv.username, fv.password)
      .then(errMsg => {
        this.isLoading = false;
        if (errMsg === 0) {
          this.errorType = ErrorType.CONNECTION_FAILED;
        }
        else this.errorType = ErrorType.UNAUTHORIZED;
      })
  }
}
