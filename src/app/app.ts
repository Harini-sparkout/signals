import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './product/product';
import { filter } from 'rxjs';
import { Filter } from './filter/filter';
import { Parent } from "./parent/parent";
import { Variable } from './variable/variable';

@Component({
  selector: 'app-root',
  imports: [Product, Filter, Parent,Variable],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('signals');
}
