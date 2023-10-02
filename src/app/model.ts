export class DataSet {
  public columnsChosen: Array<Column> = [];
  constructor(public name: string, public columnOptions: Array<Column>) {}
}

export const columns = [
  'issuerName',
  'recommendation',
  'relativeValue',
  'outlook',
] as const;

export type Column = typeof columns[number];
