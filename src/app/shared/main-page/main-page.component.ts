import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mg-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent {}
