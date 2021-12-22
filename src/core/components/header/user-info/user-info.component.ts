import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../models/User";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @Input() user: User | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
