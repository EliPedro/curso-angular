import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretitvaNgswitchComponent } from './diretitva-ngswitch.component';

describe('DiretitvaNgswitchComponent', () => {
  let component: DiretitvaNgswitchComponent;
  let fixture: ComponentFixture<DiretitvaNgswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretitvaNgswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretitvaNgswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
