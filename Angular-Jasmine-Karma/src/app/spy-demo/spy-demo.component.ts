import { Component, OnInit } from '@angular/core';
import { MockspyService } from './mockspy.service';

@Component({
  selector: 'app-spy-demo',
  templateUrl: './spy-demo.component.html',
  styleUrls: ['./spy-demo.component.scss']
})
export class SpyDemoComponent implements OnInit {

  constructor(private mockService: MockspyService) { }

  ngOnInit(): void {
    this.mockService.getValue();
  }

}
