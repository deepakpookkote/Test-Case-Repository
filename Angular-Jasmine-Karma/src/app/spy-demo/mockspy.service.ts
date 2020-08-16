import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockspyService {

  constructor() { }

  public getValue(){
    return 'Sample value';
  }
}
