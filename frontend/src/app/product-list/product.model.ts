export class Product {
    public title: string;
    public price: number;
    public imageUrl: string;
    public description: string;
    public _id: string;

    constructor(id: string, title: string, price: number, description: string, imageUrl: string) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this._id = id;
    }
}