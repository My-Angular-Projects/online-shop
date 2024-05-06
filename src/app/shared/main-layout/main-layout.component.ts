import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mg-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {}
