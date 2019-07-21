import { Component, OnInit } from '@angular/core';
import { Group } from '../../models/group';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
groups: Group[];

  constructor() { }

  ngOnInit() {
    this.groups = [
      {
        id: 0,
        name: 'super',
        musicien: [
          {
            name: 'John',
            instrument: 'Drums'
          },
          {
            name: 'Eyden',
            instrument: 'Guitar'
          },
          {
            name: 'Blake',
            instrument: 'Piano'
          }
        ]
      }
    ];
  }

}
