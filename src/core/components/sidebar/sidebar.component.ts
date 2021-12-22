import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../menu-item/menu-item.interface";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() menus: Array<MenuItem> = [];
  isCollapse = false;

  constructor() { }

  ngOnInit(): void {
    this.menus = [
      {
        name: 'Thống kê',
        route: ['dashboard'],
        matIcon: 'insert_chart',
        matIconOutlined: true,
        roles: ['owner','staff_management'],
        isDivider: true
      },
      {
        name: 'Phiếu yêu cầu',
        route: ['tickets'],
        matIcon: 'confirmation_number',
        matIconOutlined: true,
      },
      {
        name: 'Lịch sử cuộc gọi',
        route: ['call-log'],
        matIcon: 'list',
        matIconOutlined: true,
        roles: ['owner', 'telecom_customerservice']
      },
      {
        name: 'Danh bạ',
        route: ['contacts'],
        matIcon: 'contact_phone',
        matIconOutlined: true,
        roles: ['owner', 'telecom_customerservice'],
        isDivider: true,
        onlyDesktop: true
      },
      {
        name: 'Nhân viên',
        route: ['staffs'],
        matIcon: 'account_circle',
        matIconOutlined: true,
        roles: ['owner','staff_management'],
      },
      {
        name: 'Hóa đơn và Giao dịch',
        route: ['invoice-transaction'],
        matIcon: 'receipt',
        matIconOutlined: true,
        display_submenus: true,
        submenus: [
          {name: 'Hóa đơn', route: ['invoice-transaction','invoice'], hidden: false},
          {name: 'Giao dịch', route: ['invoice-transaction','transaction'], hidden: false},
        ],
        roles: ['owner','staff_management'],
        onlyDesktop: true
      },

      {
        name: 'Thiết lập',
        route: ['settings'],
        matIcon: 'settings',
        matIconOutlined: true,
        isDivider: true,
        submenus: [
          {name: 'Thông tin công ty', route: ['settings','shop'], hidden: false},
          {name: 'Loại ticket', route: ['settings','ticket-labels'], hidden: false},
          {name: 'Hotline', route: ['settings','hotlines'], hidden: false},
          {name: 'Thông tin tài khoản', route: ['settings','user'], hidden: false},
          {name: 'Danh sách công ty', route: ['settings','accounts'], hidden: false},
        ],
        display_submenus: true
      },
      {
        name: 'Yêu cầu hỗ trợ',
        route: ['supports'],
        matIcon: 'support',
        matIconOutlined: true,
        onlyDesktop: true
      },
    ];
  }

}
