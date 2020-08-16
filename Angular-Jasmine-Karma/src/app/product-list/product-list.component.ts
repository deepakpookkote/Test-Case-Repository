import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  searchText: string;
  //productList: any[] = [];

  tempProductList: any[] = [];


  constructor(private productService: ProductServiceService, private router: Router) { }

  ngOnInit() {
    this.productService.getProductList().subscribe(data => {

      this.tempProductList = data;
    });

  }

  goToProductDetail(productTitle: string) {
    this.router.navigate(['product-detail',productTitle]);
  }

  filterProductList(event) {
    let val = this.searchText;
    this.productService.filterProductList(val)
      .then((data) => {
        this.tempProductList = data;

      });
  }

  getFilterCount() {

  }

}
