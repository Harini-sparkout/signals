import { Component,signal } from '@angular/core';
import { Child } from '../child/child';

@Component({
  selector: 'app-parent',
  imports: [Child],
  templateUrl: './parent.html',
  styleUrl: './parent.css',
})
export class Parent {
           username= signal('varshini');
           receivedname=signal('');
           onnamesent(value:string){
            this.receivedname.set(value);
           }
}
