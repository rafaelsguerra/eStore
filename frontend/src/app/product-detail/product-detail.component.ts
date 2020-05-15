import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Product } from '../product-list/product.model';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  @Output() onClose = new EventEmitter<void>();
  @Input() product: Product

  constructor(private productService: ProductService, private userService: UserService) { }

  ngOnInit(): void {
  }

  onCloseButton() {
    this.onClose.emit();
  }

  onAddToCart(product: Product) {
    this.productService.addToCart(product);
    this.onClose.emit();
  }

}
