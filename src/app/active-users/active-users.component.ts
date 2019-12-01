import { Component, Input} from '@angular/core';
import {UserService} from '../user.service';
import {CountService} from '../count.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
  @Input() users: string[];
  constructor(
    private userService: UserService,
    private countService: CountService
  ) {}
  onSetToInactive(id: number) {
    this.userService.updateInactive.emit(id);
    console.log(this.countService.countUserChanges('inactive'));
  }
}
