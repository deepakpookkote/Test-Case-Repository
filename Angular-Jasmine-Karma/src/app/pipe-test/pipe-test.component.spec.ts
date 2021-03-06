import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeTestComponent } from './pipe-test.component';
import { SqurePipe } from './squre.pipe';

describe('PipeTestComponent', () => {
  let component: PipeTestComponent;
  let fixture: ComponentFixture<PipeTestComponent>;
  // const pipe = new SqurePipe();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeTestComponent, SqurePipe ],
      // imports: [SqurePipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
