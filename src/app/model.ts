export class DataSetColumn {
  public id: string;
  public displayName?: string = '';
}

export type ColumnIdentifier =
  | 'issuerName'
  | 'recommendation'
  | 'relativeValue'
  | 'outlook';

export type DataSetColumn = {
  id: ColumnIdentifier;
  displayName?: string;
};

export const columns: Array<DataSetColumn> = [
  {
    id: 'issuerName',
    displayName: 'Issuer Name',
  },
  {
    id: 'recommendation',
    displayName: 'Recommendation',
  },
  {
    id: 'relativeValue',
    displayName: 'Relative Value',
  },
  {
    id: 'outlook',
    displayName: 'Outlook',
  },
];
