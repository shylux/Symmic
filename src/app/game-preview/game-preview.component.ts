import {Component, Input, OnInit} from '@angular/core';
import {CommService} from '../comm.service';
import Lobby from '../../shared/lobby';
import * as moment from 'moment';

@Component({
  selector: 'app-game-preview',
  templateUrl: './game-preview.component.html',
  styleUrls: ['./game-preview.component.scss']
})
export class GamePreviewComponent implements OnInit {

  @Input()
  game: Lobby;

  private moment = moment;

  constructor(private commService: CommService) { }

  ngOnInit() {
  }

  hasStarted() {
    return this.game.players.length === 2;
  }

  isCurrentUserInGame(): boolean {
    return this.game.players.filter((player) => (player.name === this.commService.username)).length > 0;
  }

}
