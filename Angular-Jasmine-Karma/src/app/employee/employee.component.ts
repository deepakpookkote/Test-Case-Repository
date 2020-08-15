import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private authService: AuthenticateService) {
    this.authService.authenticate();
   }

  ngOnInit(): void {
  }

  getSalarySlip() {
    if (this.authService.checkAuthentication()) {
      return 'Salary Slip';
    } else {
      return 'Not Authenticated';
    }
  }

}
