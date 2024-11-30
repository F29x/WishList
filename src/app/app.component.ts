import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishList } from '../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Wish List';

  // Initial wish list items
  items: WishList[] = [
    new WishList('to learn Angular'),
    new WishList('have some coffee', true),
    new WishList('welcome Santa Claus'),
  ];

  // Default filter option
  filterOption: string = '0';

  // Computed visible items based on filter
  get visibleItem(): WishList[] {
    if (this.filterOption === '0') {
      return this.items;
    } else if (this.filterOption === '1') {
      return this.items.filter((item) => item.isComplete);
    } else {
      return this.items.filter((item) => !item.isComplete);
    }
  }

  // Update the filter option
  onFilterChange(value: string) {
    this.filterOption = value;
  }

}
