import { User } from '../auth/user.model';
import { Product } from '../product-list/product.model';

export class Order {
    user: User;
    products: Product[];

    constructor() {
        //TO-DO
    }
}