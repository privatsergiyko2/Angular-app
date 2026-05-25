import {Component, inject} from '@angular/core';
import {SvgIcon} from '../svg-icon/svg-icon';
import {AsyncPipe, JsonPipe, NgForOf, SlicePipe} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {SubscribeCard} from './subscribe-card/subscribe-card';
import {Profile} from '../../data/services/profile';
import {firstValueFrom} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  imports: [
    SvgIcon,
    NgForOf,
    RouterLink,
    SubscribeCard,
    AsyncPipe,
    JsonPipe,
    SlicePipe,
    RouterLinkActive
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  profileService = inject(Profile)

  subscribers$ = this.profileService.getSubscribersShortList()



  me = this.profileService.me
  menuItems = [
    {
      label: "Моя страница",
      icon: "home",
      link: "profile/me"
    },
    {
      label: "Чати",
      icon: "chats",
      link: "chats"
    },
    {
      label: "Поиск",
      icon: "search",
      link: "search"
    }
  ]

  ngOnInit() {
    firstValueFrom(this.profileService.getMe())
  }
}
