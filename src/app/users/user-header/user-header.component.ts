import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user";

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  @Input() user!: User

  constructor() {
  }

  ngOnInit(): void {
  }
}
