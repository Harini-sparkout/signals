import { Component,signal ,computed} from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
            searchtext= signal('');
            name=signal(['vaishu','karthik','meena','rashmika','anushka']);
            filterednames=computed(()=>{
              const text=this.searchtext().toLowerCase();
              return this.name().filter((name)=>
              name.toLowerCase().includes(text))
            })

}
