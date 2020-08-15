import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { AuthenticateService } from '../authenticate.service';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let authService: AuthenticateService;
  let h1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeComponent ],
      providers: [AuthenticateService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthenticateService);
    h1 = fixture.nativeElement.querySelector('h1');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should assert a value for h1 element to be value of component', () => {
    component.getSalarySlip();
    fixture.detectChanges();
    expect(h1.textContent).toBe(component.salarySlip);
  });

  it('should return the value  "Salary Slip"', () => {
    // spyOn(authService, 'checkAuthentication');
    let salarySlip = component.getSalarySlip();
    expect(salarySlip).toEqual('Salary Slip');
    // expect(authService.checkAuthentication).toHaveBeenCalled();

  });

  it('should verify checkAuthentication is called', () => {
    spyOn(authService, 'checkAuthentication').and.returnValue(true);
    let salarySlip = component.getSalarySlip();
    expect(salarySlip).toEqual('Salary Slip');
    expect(authService.checkAuthentication).toHaveBeenCalled();
  });

  it('should return not authenticated when value is false', () => {
    spyOn(authService, 'checkAuthentication').and.returnValue(false);
    let salarySlip = component.getSalarySlip();
    expect(salarySlip).toEqual('Not Authenticated');
    expect(authService.checkAuthentication).toHaveBeenCalled();
  });
});
