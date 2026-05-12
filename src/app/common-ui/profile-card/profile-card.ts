import {Component, Input} from '@angular/core';
import {IProfile} from '../../data/interfaces/profile.interfaces';



@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss',
})
export class ProfileCard {
  @Input() profile!: IProfile;
}
