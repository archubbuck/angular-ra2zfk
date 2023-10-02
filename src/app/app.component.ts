import { Component } from '@angular/core';
import { columns, DataSet } from './model';

@Component({
  selector: 'my-app',
  template: `<form novalidate #myForm="ngForm">
  <kendo-card width="360px">
      <kendo-card-header class="k-hstack" [ngStyle]="{'padding': 0}">
          <div class="d-flex justify-content-between align-items-center flex-grow-1">
              <div>
                  <kendo-avatar 
                      icon="home" 
                      size="medium"
                      fillMode="none"
                      width="40px"
                      [ngStyle]="{'margin-right': 0}"
                  ></kendo-avatar>
              </div>
              <h1 kendoCardTitle [innerText]="dataSet.name"></h1>
              <div>
                  <kendo-avatar 
                      icon="home" 
                      size="medium"
                      fillMode="none"
                      width="40px"
                      [ngStyle]="{'margin-right': 0}"
                  ></kendo-avatar>
              </div>
          </div>
      </kendo-card-header>
      
      <kendo-card-body [ngStyle]="{'padding': 0}">
      <kendo-dropdownlist
              kendoGridFocusable
              [data]="dataSet.columns"
          ></kendo-dropdownlist>
      </kendo-card-body>

      <kendo-card-footer class="k-hstack">
        <kendo-button fillMode="clear" type="button" icon="plus">
            Add a column
        </kendo-button>
      </kendo-card-footer>
  </kendo-card>
</form>`,
})
export class AppComponent {
  public dataSet: DataSet = new DataSet('Test', [...columns]);
}
