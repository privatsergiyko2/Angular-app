import {Component, Input} from '@angular/core';
import {Profile} from '../../../data/services/profile';
import {IProfile} from '../../../data/interfaces/profile.interfaces';

@Component({
  selector: 'app-subscribe-card',
  imports: [],
  templateUrl: './subscribe-card.html',
  styleUrl: './subscribe-card.scss',
})
export class SubscribeCard {
  @Input() profile!: IProfile;
}
