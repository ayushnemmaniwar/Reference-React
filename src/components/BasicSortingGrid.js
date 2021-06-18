import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

export default function BasicSortingGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 20,
    maxColumns: 6,
  });

  return (
    <div className="container" style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...data}
        sortModel={[
          {
            field:'Desk',
            field: 'commodity',
            sort: 'asc',
            
          },
        ]}
      />
    </div>
  );
}
