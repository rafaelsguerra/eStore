export class User {
    public _id: string
    public name: string;
    public email: string;
    public password: string;
    public cart: { items: any }

    // public cart: {
    //     items: {
    //         product: Product,
    //         quantity: number
    //     }[]
    // }

    constructor(
        name: string,
        email: string,
        password: string,
        cart: any) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.cart = cart;
    }
}