import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {UserService} from './user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('fragment', {static: true}) frag: ElementRef;
  activeUsers;
  inactiveUsers;
  fragment;
 constructor(
   private userService: UserService,
   private router: Router,
   private route: ActivatedRoute
 ) {this.route.fragment.subscribe(fragment => {
   this.fragment = fragment;
   console.log(fragment);
 });
   this.getUsers();
   this.userService.updateActive.subscribe(() => {
     this.getUsers();
   });
   this.userService.updateInactive.subscribe(() => {
     this.getUsers();
   });
 }
 ngAfterViewInit(): void {
   const targetElement = this.frag.nativeElement;
   targetElement.scrollIntoView({behavior: 'smooth'});
   // try {
   //   if (this.fragment) {
   //     document.querySelector('#' + this.fragment).scrollIntoView();
   //   }
   // } catch (e) { }
 }

  getUsers() {
    const usersObj = this.userService.getUsers();
    this.activeUsers = usersObj.activeUsers;
    this.inactiveUsers = usersObj.inactiveUsers;
 }

  navigateTofragment() {
    this.router.navigate([''], {fragment: 'fragment'});
  }
}
