import {Component, input} from '@angular/core';
import {IProfile} from '../../data/interfaces/profile.interfaces';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-profile-header',
  imports: [
    JsonPipe
  ],
  templateUrl: './profile-header.html',
  styleUrl: './profile-header.scss',
})
export class ProfileHeader {
  profile = input<IProfile>()
}
