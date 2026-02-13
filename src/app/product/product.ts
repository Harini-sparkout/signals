import { Component,effect,linkedSignal,signal } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  products= signal(['laptop','mobile','tablet']);
  selectedProduct = linkedSignal(()=>this.products()[2]);
  constructor(){
    effect(()=>{
      localStorage.setItem('selected',this.selectedProduct());
      console.log('selected products:',this.selectedProduct())
    })
  }
  selectSecondProduct(){
    this.selectedProduct.set(this.products()[1]);
  }
  newproduct(){
    this.products.set(['camera','headphones','smartwatch']);
  }
  
 
}
