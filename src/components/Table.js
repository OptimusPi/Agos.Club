import React from 'react';
import MaterialTable from 'material-table';
import { getTableIcons } from '../utils/table';
import TableCard from '../components/TableCard';

export default function Weapons({ tableName, dataCall, getImageFromNameCall, getColumnsCall }) {
  return (
    <MaterialTable
      title={tableName}
      options={{
        toolbar: true,
        showTitle: true,
        selection: false,
        filtering: true,
        search: false,
        sorting: true,
        paging: false,
        headerStyle: { position: 'sticky', top: 0 },
        exportButton: { csv: true },
        exportFileName: 'Agos ' + { tableName } + ' Data',
        maxBodyHeight: 'calc(100vh - 200px)',
      }}
      icons={getTableIcons()}
      onRowClick={(event, rowData, togglePanel) => togglePanel()}
      columns={getColumnsCall()}
      data={dataCall()}
      detailPanel={(rowData) => {
        return (
          <TableCard
            name={rowData.name}
            description={rowData.description}
            nicknames={rowData.nicknames}
            traits={rowData.traits}
            value={rowData.value}
            image={getImageFromNameCall(rowData.name)}
          />
        );
      }}
    />
  );
}
