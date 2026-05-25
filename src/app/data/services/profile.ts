import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pageble} from '../interfaces/pageble.interface';
import {map, pipe, tap} from 'rxjs';
import {IProfile} from '../interfaces/profile.interfaces';


@Injectable({
  providedIn: 'root',
})
export class Profile {
  http = inject(HttpClient);

  me = signal<IProfile | null>(null);

  filteredProfiles = signal<IProfile[]>([]);


  baseApiUrl = 'https://icherniakov.ru/yt-course'
  id: any;
  firstName: string | undefined;
  lastName: string | undefined;
  // userName: string | undefined;
  description: string | undefined;
  stack: any;
  avatarUrl: any;


  getAccount(id: string) {
    return this.http.get<IProfile>(`${this.baseApiUrl}/account/${id}`, {});
  }


  getSubscribersShortList(subsAmmount = 3) {
    return this.http.get<Pageble<IProfile>>(`${this.baseApiUrl}/account/subscribers/`)
      .pipe(
        map(res => res.items.slice(0, subsAmmount))
      )
  }


  getTestAccounts() {
    return this.http.get<IProfile[]>(`${this.baseApiUrl}/account/test_accounts`)
  }


  getMe() {
    return this.http.get<IProfile>(`${this.baseApiUrl}/account/me`)
      .pipe(
        tap((res: any) => {
          this.me.set(res)
          console.log(res)
        })
      )
  }


  patchProfile(profile: Partial<Profile>) {
    return this.http.patch<IProfile>(`${this.baseApiUrl}/account/me`, profile)
  }

  uploadAvatar(file: File) {
    const fd = new FormData();
    fd.append('image', file);
    return this.http.post<IProfile>(`${this.baseApiUrl}/account/upload_image`, fd)
  }

  filterProfiles(params: Record<string, any>) {
    return this.http.get<Pageble<IProfile>>(
      `${this.baseApiUrl}/account/accounts`,
    {
      params
    }
    ).pipe(
      tap(res => this.filteredProfiles.set(res.items)),
    )
  }
}


