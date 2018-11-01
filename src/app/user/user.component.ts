import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() userId = this.userId;
  user = {
    firstName: '',
    lastName: '',
    email: ''
  }



  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUser(this.userId);
  }

  getUser(id: number): void {
    console.log(id)
    this.userService.getUser(id).subscribe(user => {
      console.log(user);
      this.user = user
    })
  }

}
