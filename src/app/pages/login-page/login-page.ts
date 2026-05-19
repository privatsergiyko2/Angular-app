import {Component, inject, signal} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Auth} from '../../auth/auth';
import {delay, from, map, skip, take} from 'rxjs';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  authService = inject(Auth);
  router = inject(Router);

 isPasswordVisible = signal<boolean>(false)

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })


  onSubmit() {
    if (this.form.valid) {
     //@ts-ignore
      this.authService.login(this.form.value)
        .subscribe(res => {
          this.router.navigate(['']);
          console.log(res);
        })
    }

  }

  protected showHidePassword() {
    // this.isPasswordVisible.set(!this.isPasswordVisible())
    if(this.isPasswordVisible() === true) {
      this.isPasswordVisible.set(false)
    } else {
      this.isPasswordVisible.set(true)
    }
  }
}
