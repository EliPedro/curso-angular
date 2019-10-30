import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretitvaNgifComponent } from './diretitva-ngif.component';

describe('DiretitvaNgifComponent', () => {
  let component: DiretitvaNgifComponent;
  let fixture: ComponentFixture<DiretitvaNgifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretitvaNgifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretitvaNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
