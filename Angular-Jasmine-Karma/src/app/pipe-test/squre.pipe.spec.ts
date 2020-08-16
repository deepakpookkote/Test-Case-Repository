import { SqurePipe } from './squre.pipe';
import { async } from 'rxjs/internal/scheduler/async';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

describe('SqurePipe', () => {

  let pipe: SqurePipe;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SqurePipe],
      imports: [FormsModule],
    })
    .compileComponents();
    pipe = new SqurePipe();
  });

  it('create an instance', () => {
    const pipe = new SqurePipe();
    expect(pipe).toBeTruthy();
  });

  it('should check pipe transforms the number into its square (x * x)',  () => {
    expect(pipe.transform(10)).toBe(100);
  });

  it('should check it should return an error if its not a valid number', () => {
      let value = String('any');
      expect(pipe.transform(value)).toBe('Not a number');
  });
});
