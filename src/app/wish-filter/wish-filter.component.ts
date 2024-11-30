import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wish-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css'],
})
export class WishFilterComponent {
  @Output() filter = new EventEmitter<string>();

  // Default filter option
  filterOption: string = '0';

  // Emit the filter change
  changeFilter(value: string) {
    this.filter.emit(value);
  }
}
