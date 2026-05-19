import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Profile {
  http = inject(HttpClient);


  baseApiUrl = 'https://icherniakov.ru/yt-course'
  id: any;
  firstName: string | undefined;
  lastName: string | undefined;
  // userName: string | undefined;
  description: string | undefined;
  stack: any;
  avatarUrl: any;

  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}/account/test_accounts`)
  }

  getMe() {
    return this.http.get<Profile>(`${this.baseApiUrl}/account/me`)
  }
}


