import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'aem-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {

  form: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    // this.authService.logout();
  }

  submit() {
    let fv = this.form.value;
    console.warn(`event`, fv);
    this.authService.login(fv.username, fv.password);
  }
}
