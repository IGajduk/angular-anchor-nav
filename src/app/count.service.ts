import { Injectable } from '@angular/core';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CountService {
countInactive = 0;
countActive = 0;
  constructor(
  ) {}
  countUserChanges(typeUsers) {
    if (typeUsers === 'active') {
      this.countActive++;
    } else {
      this.countInactive++;
    }
    return {countActiva: this.countActive, countInactive: this.countInactive};
  }
}
