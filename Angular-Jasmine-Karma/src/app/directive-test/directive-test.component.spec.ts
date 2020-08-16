import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveTestComponent } from './directive-test.component';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { HelloDirective } from './hello.directive';

describe('DirectiveTestComponent', () => {
  let component: DirectiveTestComponent;
  let fixture: ComponentFixture<DirectiveTestComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveTestComponent, HelloDirective ],
      imports: [RouterTestingModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveTestComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the directive for its changes to div', () => {
    component.username = "Deepak";
    let btn = de.query(By.css('button'));
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();

    let div = de.query(By.css('#customDiv'));

    expect(div.nativeElement.innerText).toContain('Hello Deepak');
    expect(div.nativeElement.style.backgroundColor).toBe('green');

    div.triggerEventHandler('mouseover', null);
    fixture.detectChanges();

    expect(div.nativeElement.style.backgroundColor).toBe('orange');
    expect(div.nativeElement.style.fontSize).toBe('28px');

  });
});
