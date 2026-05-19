import {Component} from '@angular/core';
import {SvgIcon} from '../svg-icon/svg-icon';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    SvgIcon,
    NgForOf,
    RouterLink
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  menuItems = [
    {
      label: "Моя страница",
      icon: "home",
      link: ""
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
}
