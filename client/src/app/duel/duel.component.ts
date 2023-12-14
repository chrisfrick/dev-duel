import { Component, OnInit } from '@angular/core';
import User from 'src/types/User';
import { UserService } from 'src/user.service';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css'],
})
export class DuelComponent implements OnInit {
  usernameOne: string = '';
  usernameTwo: string = '';

  currentUserOne: User | null = {
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
  currntUserTwo: User | null = {
    username: 'gaearon',
    name: 'dan',
    location: '',
    bio: '',
    avatar_url: 'https://avatars.githubusercontent.com/u/810438?v=4',
    titles: ['Forker', 'Mr. Popular'],
    'favorite-language': 'JavaScript',
    'public-repos': 268,
    'total-stars': 1524,
    'highest-starred': 1086,
    'perfect-repos': 3,
    followers: 85296,
    following: 172,
  };

  errorMessage: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  onSubmit() {
    this.userService.duelUsers(this.usernameOne, this.usernameTwo).subscribe({
      next: (users) => {
        this.currentUserOne = users[0];
        this.currntUserTwo = users[1];
      },
      error: (error) => (this.errorMessage = error.error.message),
    });
  }
}
