import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Product } from '../product-list/product.model';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  @ViewChild('f', { static: false }) signupForm: NgForm;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  product: Product;

  title: string;
  price: number;
  imageUrl: string;
  description: string;

  editMode = false;


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.product = this.productService.getProduct(id);
      this.editMode = params['id'] != null;
    });

    if (this.editMode) {
      this.title = this.product.title;
      this.price = this.product.price;
      this.imageUrl = this.product.imageUrl;
      this.description = this.product.description
    }
  }

  onSubmit(form: NgForm) {
    if (this.editMode ) {
      this.productService.updateProduct(this.product._id, form.value)
    } else {
      this.productService.addProduct(form.value);
    }
    this.router.navigate(['admin','products'])
  }

}
