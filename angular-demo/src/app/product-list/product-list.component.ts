import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  title: string = 'Product List';
  products: IProduct[];
  allProducts: IProduct[];
  showImages: boolean = false;
  searchText: string = '';

  constructor(private lowerCasePipe: LowerCasePipe) {
    this.products = [
      {
        productName: 'Hero Honda CD 100',
        description: 'Most popular Bike of India',
        releaseDate: '10-08-1990',
        price: 100.898,
        isActive: true,
        imageUrl: 'https://via.placeholder.com/150?text=CD100SS',
      },
      {
        productName: 'Honda Hornet',
        description: 'A sports Bike',
        releaseDate: '10-08-2010',
        price: 200,
        isActive: true,
        imageUrl: 'https://via.placeholder.com/150?text=Hornet',
      },
      {
        productName: 'Super splendor',
        description: '',
        releaseDate: null,
        price: 0.78,
        isActive: true,

        imageUrl: 'https://via.placeholder.com/150?text=Splendor',
      },
      {
        productName: 'Yamaha RX 100',
        description: null,
        releaseDate: '10-08-1987',
        price: 122,
        isActive: false,
        imageUrl: 'https://via.placeholder.com/150?text=RX100',
      },
    ];
    this.allProducts = [...this.products];
  }

  refreshData() {
    console.log('Refreshing !!');
    this.products = [
      {
        productName: 'Hero Honda CD 100',
        description: 'Most popular Bike of India',
        releaseDate: '10-08-1990',
        price: 100,
        isActive: true,
        imageUrl: 'https://via.placeholder.com/150?text=CD100SS',
      },
      {
        productName: 'Honda Hornet',
        description: 'A sports Bike',
        releaseDate: '10-08-2010',
        price: 200,
        isActive: true,
        imageUrl: 'https://via.placeholder.com/150?text=Hornet',
      },
      {
        productName: 'Super splendor',
        description: 'A Bike that the nation trusts',
        releaseDate: '10-08-1980',
        price: 75,
        isActive: true,

        imageUrl: 'https://via.placeholder.com/150?text=Splendor',
      },
      {
        productName: 'Yamaha RX 100',
        description: 'Nostalgic !',
        releaseDate: '10-08-1987',
        price: 122,
        isActive: false,
        imageUrl: 'https://via.placeholder.com/150?text=RX100',
      },
      {
        productName: 'Maruti ALTO',
        description: 'Any Desc',
        releaseDate: '10-08-1999',
        price: 1220,
        isActive: true,
        imageUrl: 'https://via.placeholder.com/150?text=Alto',
      },
    ];
  }
  ngOnInit(): void {}

  trackByName(index: number, product: IProduct) {
    return product.productName;
  }

  getProductStyles(product: IProduct) {
    if (product.price == 200) {
      return {
        color: 'green',
        fontWeight: 'bolder',
      };
    } else {
      return {};
    }

    // return {
    //   color: product.price == 200 ? 'green' : '',
    //   fontWeight: product.price == 200 ? 'bolder' : 'normal',
    // };
  }

  getClassesForProduct(product: IProduct) {
    if (product.price == 200) {
      return {
        green: true,
        bold: true,
      };
    } else {
      return {};
    }
  }

  buyProduct(product: IProduct) {
    console.log('Buying initiated for ' + product.productName);
    console.log('Value of Search Text', this.searchText);
  }

  toggleImage() {
    this.showImages = !this.showImages;
  }
  changeName() {
    this.products[0].productName = 'Nexon';
  }
  // filterData() {
  //   console.log('Filtering !', this.searchText);
  //   this.products = this.allProducts.filter((item) =>
  //     item.productName
  //       .toLowerCase()
  //       .includes(this.lowerCasePipe.transform(this.searchText))
  //   );
  // }
}
