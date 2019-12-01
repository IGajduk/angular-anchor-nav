import { Component, Input} from '@angular/core';
import {UserService} from '../user.service';
import {CountService} from '../count.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
  constructor(
    private userService: UserService,
    private countService: CountService
  ) {}
  onSetToActive(id: number) {
    this.userService.updateActive.emit(id);
    this.countService.countUserChanges('active');
  }
}
