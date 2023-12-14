import { Component, Input, OnInit } from '@angular/core';
import User from 'src/types/User';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css'],
})
export class InspectComponent implements OnInit {
  username: string = '';

  user: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  onSubmit() {
    this.userService
      .inspectUser(this.username)
      .subscribe((user) => (this.user = user));
  }
}
