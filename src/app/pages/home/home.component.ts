import { Component, OnInit } from '@angular/core';
import { Group } from '../../models/group';
import { Musicien } from '../../models/musicien';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
groups: Group[] = [];
musicien: Musicien[] = [];
instruments = ['Drums', 'Piano', 'Guitar', 'Bass'];

  constructor() {
  }

  ngOnInit() {
    const numGroup = this.getRandomInt(1, 15);
    for (let i = 0; i < numGroup; i++) {
      this.groups.push({
        name: this.randValue(6),
        musicien: this.getRandomMusicien()
      });
    }
  }

  getRandomMusicien() {
    const numMusicien = this.getRandomInt(1, 3);
    for (let i = 0; i < numMusicien; i++) {
      this.musicien.push({
        name: this.randValue(6),
        instrument: this.instruments[this.getRandomInt(0, 3)]
      });
    }
    return this.musicien;
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  randValue(length) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
  }

}
