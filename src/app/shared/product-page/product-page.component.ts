import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mg-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPageComponent {}
