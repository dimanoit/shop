import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { Category } from '../models/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productList = [
    new ProductModel('https://i2.rozetka.ua/goods/10930185/prestigio_psb141c02zfh_db_cis_images_10930185801.jpg',
      'Prestigio SmartBook 141 С3', `With it, it is easy to perform work and training tasks,
    surf the net or just watch movies.
    Compactness, high autonomy, efficient multitasking and the availability of ports for
    connecting any equipment are important advantages for non-stop users.`, 4444, true, Category.Laptops),
    new ProductModel('https://i2.rozetka.ua/goods/14073243/samsung_galaxy_m30s_4_64gb_blue_images_14073243383.jpg',
      'Samsung Galaxy M30s', `Screen (6.4 ", Super AMOLED, 2340x1080) / Samsung Exynos 9611
    (4 x 2.3 GHz + 4 x 1.7 GHz) / triple main camera: 48 MP + 8 MP + 5 MP,
    front 16 MP / RAM 4 GB / 64 GB built-in memory + microSD (up to 512 GB)
    / 3G / LTE / GPS / GLONASS / BDS / Galileo / support for 2 SIM cards (Nano-SIM)
    / Android 9.0 (Pie) / 6000 mA * h.`, 6999, true, Category.Phones),
    new ProductModel('https://i2.rozetka.ua/goods/12880552/vestfrost_vd142rs_images_12880552524.jpg',
      'Single chamber refrigerator VESTFROST VD142RS', `This VESTFROST refrigerator uses
    eye-friendly lighting.The original lamp design allows you to illuminate every corner of the refrigerator
    , so that finding the right products will not take much time.`, 3777, true, Category.Appliances),
    new ProductModel('https://i2.rozetka.ua/goods/8693019/artline_x77v23_images_8693019676.jpg',
      'Artline Gaming X39', `Personal computers of the Artline Gaming series are computers
    for those who love and want to relax!This is the tool thanks to which you can fully reveal your
    skill in your favorite games.`, 6999, true, Category.Computers),
    new ProductModel('https://i2.rozetka.ua/goods/8693019/artline_x77v23_images_8693019676.jpg',
      'Artline Gaming X39', `Personal computers of the Artline Gaming series are computers
    for those who love and want to relax!This is the tool thanks to which you can fully reveal your
    skill in your favorite games.`, 6999, true, Category.Computers),
    new ProductModel('https://i2.rozetka.ua/goods/8693019/artline_x77v23_images_8693019676.jpg',
      'Artline Gaming X39', `Personal computers of the Artline Gaming series are computers
    for those who love and want to relax!This is the tool thanks to which you can fully reveal your
    skill in your favorite games.`, 6999, true, Category.Computers),
    new ProductModel('https://i2.rozetka.ua/goods/8693019/artline_x77v23_images_8693019676.jpg',
      'Artline Gaming X39', `Personal computers of the Artline Gaming series are computers
    for those who love and want to relax!This is the tool thanks to which you can fully reveal your
    skill in your favorite games.`, 6999, true, Category.Computers),
    new ProductModel('https://i2.rozetka.ua/goods/8693019/artline_x77v23_images_8693019676.jpg',
      'Artline Gaming X39', `Personal computers of the Artline Gaming series are computers
    for those who love and want to relax!This is the tool thanks to which you can fully reveal your
    skill in your favorite games.`, 6999, true, Category.Computers)
  ];

  constructor() { }

  getAllProducts(): Array<ProductModel> {
    return this.productList;
  }
}
