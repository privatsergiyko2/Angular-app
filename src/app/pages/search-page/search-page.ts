import {ChangeDetectorRef, Component, inject, signal} from '@angular/core';
import {ProfileCard} from '../../common-ui/profile-card/profile-card';
import {Profile} from '../../data/services/profile';
import {IProfile} from '../../data/interfaces/profile.interfaces';

@Component({
  selector: 'app-search-page',
  imports: [
    ProfileCard
  ],
  templateUrl: './search-page.html',
  styleUrl: './search-page.scss',
})
export class SearchPage {
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
