import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/User";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User = {
    id: '1',
    full_name: 'Nguyen Quang Truong',
    phone: '0914221915',
    email: 'mrherik@gmail.com',
    img_url: 'http://simpleicon.com/wp-content/uploads/account.png',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
