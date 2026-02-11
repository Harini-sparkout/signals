import { Component ,input,output} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  name=input<string>('');
  namesent=output<string>();
  sendToparent(){
    this.namesent.emit(this.name());
  }

}
