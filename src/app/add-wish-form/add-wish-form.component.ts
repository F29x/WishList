import { Component ,Output,EventEmitter} from '@angular/core';
import { WishList } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishList>()

  newWishText ='';
  addNewWish(){
    if(this.newWishText !== ''){

      this.addWish.emit(new WishList(this.newWishText))
    }
    this.newWishText = ''

  }
}
