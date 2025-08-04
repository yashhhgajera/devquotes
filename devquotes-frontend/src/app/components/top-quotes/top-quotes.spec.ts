import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopQuotes } from './top-quotes';

describe('TopQuotes', () => {
  let component: TopQuotes;
  let fixture: ComponentFixture<TopQuotes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopQuotes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopQuotes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
