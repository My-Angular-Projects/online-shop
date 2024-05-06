import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mg-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersPageComponent {

}
