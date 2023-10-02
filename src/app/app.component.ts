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
              <h1 kendoCardTitle>Issuers</h1>
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
      <kendo-grid
        [kendoGridTemplateEditing]="addRow"
        [rowReorderable]="true"
        [kendoGridBinding]="selectedColumns"
        [pageable]="true"
        [sortable]="true"
        [navigable]="true"
        [hideHeader]="true"
        scrollable="none"
        [ngStyle]="{'border-width': 0}"
      >
      <kendo-grid-rowreorder-column [width]="40"></kendo-grid-rowreorder-column>
      <kendo-grid-column>
      <ng-template kendoGridCellTemplate let-dataItem let-column="column">
          <kendo-dropdownlist
              kendoGridFocusable
              [data]="selectableColumns"
              [(ngModel)]="dataItem"
          ></kendo-dropdownlist>
      </ng-template>
      </kendo-grid-column>
      <kendo-grid-command-column [width]="40">
          <ng-template kendoGridCellTemplate>
          <button kendoGridRemoveCommand fillMode="clear" icon="delete" type="button" size="medium"></button>
          </ng-template>
      </kendo-grid-command-column>
      <ng-template kendoPagerTemplate>
          <kendo-grid-spacer></kendo-grid-spacer>
          <button kendoGridAddCommand fillMode="clear" type="button" icon="plus">
              Add a column
          </button>
          <kendo-grid-spacer></kendo-grid-spacer>
      </ng-template>
    </kendo-grid>
      </kendo-card-body>
  </kendo-card>
</form>`,
})
export class AppComponent {
  public dataSets: Array<DataSet> = [new DataSet('Test', [...columns])];
}
