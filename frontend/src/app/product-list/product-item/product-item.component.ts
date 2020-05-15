import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from 'src/app/product.service';
import { UserService } from 'src/app/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() adminMode: boolean;

  constructor(private productService: ProductService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  openModal = false;

  ngOnInit(): void {

  }

  onClickDetails() {
    this.openModal = true;
  }

  handleModal() {
    this.openModal = false;
  }

  onAddToCart(product: Product) {
    this.productService.addToCart(product);
    this.handleModal();
  }

  onEdit(product: Product) {
    this.router.navigate(['admin', this.product._id, 'edit'])
  }

  onDelete(product: Product) {
    this.productService.deleteProduct(product._id);
  }

}
