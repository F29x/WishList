import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishList } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  item =[
    new WishList('to learn angular'),
    new WishList('have some coffe', true),
    new WishList('welcome santa claus')
  ];
  title = 'WishList';
}
