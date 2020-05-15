import { Injectable } from '@angular/core'

import { Product } from './product-list/product.model';
import { Subject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsChanged = new Subject<Product[]>();
  private products: Product[] = [
    new Product('iufhaiyeg3', 'televisão', 500, 'enorme', 'https://www.kindpng.com/picc/m/195-1950715_flat-screen-tv-png-transparent-png.png'),
    new Product('ofnaoefne1', 'computador', 3000, 'eh um pczao', 'https://www.kindpng.com/picc/m/193-1936099_pc-gamer-png-transparent-png.png'), 
    new Product('aefijeaho1', 'ventilador', 50, 'tufao', 'https://atlas-content-cdn.pixelsquid.com/stock-images/classical-fan-table-1VNko88-600.jpg'),
    new Product('apfajhfaç3', 'mesa', 80, 'mesa do the sims', 'https://pngimage.net/wp-content/uploads/2018/06/mesa-desenho-png-1.png')
  ];

  constructor(private userService: UserService) { }

  getProducts() {
    return this.products.slice();
  }

  setProducts(products: Product[]) {
    this.products = products;
  }

  getProduct(productId: string) {
    const index = this.products.findIndex(product => {
      return product._id === productId
    });
    return this.products[index];
  }

  addToCart(product: Product) {
    this.userService.addToCart(product);
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.productsChanged.next(this.products);
  }

  updateProduct(productId: string, product: Product) {
    const index = this.products.findIndex(product => {
      return product._id === productId
    });
    this.products[index] = product;
    this.productsChanged.next(this.products);
  }

  deleteProduct(productId: string) {
    const updatedProducts = this.products.filter(p => {
      return p._id !== productId;
    });

    this.products = updatedProducts;
    this.productsChanged.next(this.products);
  }
}
