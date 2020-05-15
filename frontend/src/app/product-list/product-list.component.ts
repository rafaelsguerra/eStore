import { Component, OnInit, OnDestroy } from '@angular/core';

import { Product } from './product.model'
import { ProductService } from '../product.service';
import { User } from '../auth/user.model';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  products = [];
  prodsChanged: Subscription;

  adminMode: boolean;

  constructor(private productService: ProductService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.prodsChanged = this.productService.productsChanged.subscribe(prods => {
      this.products = prods;
    });

    this.route.data.subscribe(
      (data: Data) => {
        this.adminMode = data['adminMode'];
      }
    );
  }

  ngOnDestroy(): void {
    this.prodsChanged.unsubscribe();
  }

}
