import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
