import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'aem-user-list',
  templateUrl: './user-list.component.html',
  styles: [`
    th {
      background-color: #343A40;
      color: white;
    }`]
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
