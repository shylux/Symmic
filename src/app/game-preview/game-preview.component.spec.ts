import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {GamePreviewComponent} from './game-preview.component';
import {CommService} from '../comm.service';
import Lobby from '../../shared/lobby';
import Player from '../../shared/player';


describe('GamePreviewComponent', () => {
  let component: GamePreviewComponent;
  let fixture: ComponentFixture<GamePreviewComponent>;

  beforeEach(async(() => {
    const mockCommService = {
      username: 'loggedInUser'
    };

    TestBed.configureTestingModule({
      providers: [
        { provide: CommService, useValue: mockCommService }
      ],
      declarations: [ GamePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should say game started if there are two players', () => {
    component.game = new Lobby('test game', 'chess', [new Player('bob')]);
    expect(component.hasStarted()).toBeFalsy();
  });
});
