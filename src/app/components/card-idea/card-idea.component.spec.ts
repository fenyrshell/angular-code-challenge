import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIdeaComponent } from './card-idea.component';

describe('CardIdeaComponent', () => {
  let component: CardIdeaComponent;
  let fixture: ComponentFixture<CardIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
