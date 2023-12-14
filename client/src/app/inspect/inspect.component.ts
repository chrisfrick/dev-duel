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

  currentUser: User | null = {
    username: 'gaearon',
    name: 'Dan Abramov',
    location: 'London, UK',
    bio: 'Working on @reactjs. Co-author of Redux and Create React App. Building tools for humans.',
    avatar_url: 'https://avatars0.githubusercontent.com/u/810438?v=4',
    titles: ['Jack of all Trades', 'Mr. Popular'],
    'favorite-language': 'JavaScript',
    'public-repos': 227,
    'total-stars': 120580,
    'highest-starred': 45820,
    'perfect-repos': 2,
    followers: 33015,
    following: 171,
  };

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  onSubmit() {
    this.userService
      .inspectUser(this.username)
      .subscribe((user) => (this.currentUser = user));
  }
}
