import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser'; // By is used to query the dom elements in the dom using the css

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should "Add counter" when button is clicked', () => {
    const h1 = de.query(By.css('h1'));
    const btn = de.query(By.css('#addClick'));
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    // expect(component.counter).toEqual(parseInt(h1.nativeElement.innerText, 10));
    expect(component.counter).toEqual(+(h1.nativeElement.innerText));
  });

  it('should "Remove Counter when button is clicked"', async () => {
    const h1 = de.query(By.css('h1'));
    const btn = de.query(By.css('#removeClick'));
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.counter).toBe(+(h1.nativeElement.innerText));
  });
});
