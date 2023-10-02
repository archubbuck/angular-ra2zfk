export class DataSet {
  public columnsChosen: Array<ColumnIdentifier> = [];
  constructor(
    public name: string,
    public columnOptions: Array<ColumnIdentifier>
  ) {}
}

export const columnOptions = [
  'issuerName',
  'recommendation',
  'relativeValue',
  'outlook',
] as const;

export type ColumnOptions = keyof ColumnOptions[number];
