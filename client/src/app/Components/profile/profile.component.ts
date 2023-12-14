import { Component, Input, OnInit } from '@angular/core';
import User from 'src/types/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Input() user: User | null = null

  constructor() {}

  ngOnInit(): void {}
}
