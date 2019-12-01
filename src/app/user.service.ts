import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  updateActive = new EventEmitter<number>();
  updateInactive = new EventEmitter<number>();
  constructor() {
    this.updateActive.subscribe(id => {
      this.onSetToActive(id);
    });
    this.updateInactive.subscribe(id => {
      this.onSetToInactive(id);
    });
  }
  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }
  getUsers() {
    return {activeUsers: this.activeUsers, inactiveUsers: this.inactiveUsers};
  }
}
