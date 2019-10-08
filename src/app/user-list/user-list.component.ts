import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'aem-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() tableUsers = [];
  columns = [
    {header: '#'},
    {header: 'First'},
    {header: 'Last'},
    {header: 'Username'},
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
