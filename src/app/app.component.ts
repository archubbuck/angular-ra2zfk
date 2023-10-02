import { Component } from '@angular/core';
import { DataSet } from './model';

@Component({
  selector: 'my-app',
  template: ``,
})
export class AppComponent {
  public dataSets: Array<DataSet> = [new DataSet('Test')];
}
