import { Component ,Input} from '@angular/core';
import { WishList } from '../../shared/models/wishItem';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-wish-list',
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
 @Input() wishes :WishList[]= []

  toggleEvent(wishes: WishList){
    wishes.isComplete = !wishes.isComplete
    console.log(wishes)
  }



}

