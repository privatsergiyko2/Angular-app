import {Component, Input} from '@angular/core';
import {Profile} from '../../../data/services/profile';

@Component({
  selector: 'app-subscribe-card',
  imports: [],
  templateUrl: './subscribe-card.html',
  styleUrl: './subscribe-card.scss',
})
export class SubscribeCard {
@Input() profile!: Profile;
}
