import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mg-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartPageComponent {}
