import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyDemoComponent } from './spy-demo.component';
import { MockspyService } from './mockspy.service';

describe('SpyDemoComponent', () => {
  let component: SpyDemoComponent;
  let fixture: ComponentFixture<SpyDemoComponent>;
  let demoData: any;
  let demoList: any;
  let mockService: MockspyService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpyDemoComponent],
      providers: [MockspyService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockService = TestBed.inject(MockspyService);

    // code for jasmine.create spy
    demoData = jasmine.createSpy('fetchData');
    demoData('Dummy data fetched');

    demoList = jasmine.createSpyObj('demoList', ['add', 'remove', 'refresh']);
    demoList.add();
    demoList.remove(1);
    demoList.refresh();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should spy on get value method is called', () => {
    let mockspy = spyOn(mockService, 'getValue');
    component.ngOnInit();
    expect(mockspy).toHaveBeenCalled();
  });

  it('should [jasmine.createSpy] should check fetchData is defined', async () => {
    expect(demoData).toBeDefined()
  });

  it('should [jasmine.createSpy] should check fetchData is called', async () => {
    expect(demoData).toHaveBeenCalled();
  });

  it('should [jasmine.createSpy] should check fetchData is called once', async () => {
    expect(demoData.calls.count()).toBe(1);
  });

  it('should [jasmine.createSpyObj] should check all the demoList methods are defined', () => {
    expect(demoList.add).toBeDefined();
    expect(demoList.remove).toBeDefined();
    expect(demoList.refresh).toBeDefined();
  });

  it('should [jasmine.createSpyObj] should check all the demoList methods are called', () => {
    expect(demoList.add).toHaveBeenCalled();
    expect(demoList.remove).toHaveBeenCalled();
    expect(demoList.refresh).toHaveBeenCalled();
  });

  it('should [jasmine.createSpyObj] should check all the demoList methods are called once', () => {
    expect(demoList.add.calls.count()).toBe(1);
    expect(demoList.remove.calls.count()).toBe(1);
    expect(demoList.refresh.calls.count()).toBe(1);
  });

  it('should [jasmine.createSpyObj] tracks all the arguments of it calls', () => {
    expect(demoList.remove).toHaveBeenCalledWith(1);
  });
});
