import { Category } from './category.enum';

export class ProductModel {
    imgUrl: string;
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;
    category: Category;

    constructor(imgUrl: string, name: string, description: string, price: number, isAvalible: boolean, category: Category) {
        this.imgUrl = imgUrl;
        this.name = name;
        this.description = description;
        this.price = price;
        this.isAvailable = isAvalible;
        this.category = category;
    }
}
