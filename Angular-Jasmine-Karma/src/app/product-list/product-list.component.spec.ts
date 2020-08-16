import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';


import { ProductServiceService } from './product-service.service';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let de: DebugElement;
  let productService: ProductServiceService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [FormsModule, RouterTestingModule],
      providers: [ProductServiceService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    productService = TestBed.inject(ProductServiceService);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should check product service is created or not!!', () => {
    expect(productService).toBeTruthy();
  });

  it('should test filter product list using("done")', (done) => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    component.searchText = 'fresh';
    let productSpy = spyOn(productService, 'filterProductList').and.callThrough();

    component.filterProductList({});
    productSpy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      const value = de.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);
      done();
    });
  });

  it('should test filter product list using ("async")', async () => {
    component.searchText = 'e';
    let productSpy = spyOn(productService, 'filterProductList').withArgs('e').and.callThrough();

    component.filterProductList({});

    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const value = de.query(By.css('#product_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);
    });
  });


  it('should test filter product list using ("fake-async")', fakeAsync(() => {
    component.searchText = 'e';
    let productSpy = spyOn(productService, 'filterProductList').withArgs('e').and.callThrough();

    component.filterProductList({});

    tick();

    fixture.detectChanges();
    const value = de.query(By.css('#product_0')).nativeElement.innerText;
    expect(value).toContain(component.searchText);
  }));

});
