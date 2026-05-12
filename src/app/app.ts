import {ChangeDetectorRef, Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProfileCard} from './common-ui/profile-card/profile-card';
import {HttpClient} from '@angular/common/http';
import {JsonPipe} from '@angular/common';
import {Profile} from './data/services/profile';
import {IProfile} from './data/interfaces/profile.interfaces';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProfileCard, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Angular-app');
  profile = inject(Profile);
  cdr = inject(ChangeDetectorRef);
  profiles: IProfile[] | any = []
  constructor() {
    this.profile.getTestAccounts().subscribe(val =>{
      console.log(val);
      this.profiles = val
      this.cdr.detectChanges()
    })
  }
}





