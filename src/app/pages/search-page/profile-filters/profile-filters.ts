import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {Profile} from '../../../data/services/profile';
import {debounceTime, Subscription, switchMap} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-profile-filters',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './profile-filters.html',
  styleUrl: './profile-filters.scss',
})
export class ProfileFilters implements OnDestroy {
  fb = inject(FormBuilder)

  profileService = inject(Profile)


  searchForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    stack: [''],
  })

  searchFormSub!: Subscription

  constructor() {
    this.searchFormSub = this.searchForm.valueChanges
      .pipe(
        debounceTime(300),
        switchMap(formValue => {
          return this.profileService.filterProfiles(formValue)
        }),
      )
      .subscribe()
  }

  ngOnDestroy() {
    this.searchFormSub.unsubscribe()
  }
}
