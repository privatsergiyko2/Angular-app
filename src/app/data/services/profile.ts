import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pageble} from '../interfaces/pageble.interface';
import {map, pipe, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Profile {
  http = inject(HttpClient);

  me = signal(null)

  baseApiUrl = 'https://icherniakov.ru/yt-course'
  id: any;
  firstName: string | undefined;
  lastName: string | undefined;
  // userName: string | undefined;
  description: string | undefined;
  stack: any;
  avatarUrl: any;


  getAccount(id: String) {
    return this.http.get<Profile>(`${this.baseApiUrl}/account/${id}`, {});
  }


  getSubscribersShortList() {
    return this.http.get<Pageble<Profile>>(`${this.baseApiUrl}/account/subscribers`)
      .pipe(
        map(res => res.items)
      )
  }


  getTestAccounts() {
    return this.http.get<Profile[]>(`${this.baseApiUrl}/account/test_accounts`)
  }

  getMe() {
    return this.http.get<Profile>(`${this.baseApiUrl}/account/me`)
      .pipe(
        tap((res: any) => {
          this.me.set(res)
          console.log(res)
        })
      )
  }


  patchProfile(profile: Partial<Profile>) {
    return this.http.patch(`${this.baseApiUrl}/account/me`, profile)
  }
}


