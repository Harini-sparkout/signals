import { Component,linkedSignal,signal } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  products= signal(['laptop','mobile','tablet']);
  selectedProduct = linkedSignal(()=>this.products()[2]);
  selectSecondProduct(){
    this.selectedProduct.set(this.products()[0]);
  }
  newproduct(){
    this.products.set(['camera','headphones','smartwatch']);
  }
  
 
}
