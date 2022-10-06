import { Component } from '@angular/core';

@Component({
  selector: 'acn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: number | string = 'design-system';

  onGenericBtnClick(genericArgument: number | string) {
    this.title = genericArgument;
  }
}
