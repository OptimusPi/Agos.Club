import React from 'react';
import MaterialTable from 'material-table';
import { Box } from '@material-ui/core';
import { getTableIcons } from '../utils/table';
import { getHatData } from '../utils/data';
import HatsCard from '../components/HatsCard';
import { getHatImageFromName } from '../utils/images';

export default function Weapons() {
  return (
    <Box my={2} mx={2}>
      <MaterialTable
        title="Hats"
        options={{
          toolbar: true,
          showTitle: true,
          selection: false,
          filtering: true,
          search: false,
          sorting: true,
          paging: false,
          headerStyle: { position: 'sticky', top: 0 },
          exportButton: true,
          exportFileName: 'Agos Hats Data',
          maxBodyHeight: 'calc(100vh - 200px)',
        }}
        icons={getTableIcons()}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
        columns={getColumns()}
        data={getHatData()}
        detailPanel={(rowData) => {
          return (
            <HatsCard
              name={rowData.name}
              description={rowData.description}
              holders={rowData.holders}
              nicknames={rowData.nicknames}
              traits={rowData.traits}
              value={rowData.value}
              image={getHatImageFromName(rowData.name)}
            />
          );
        }}
      />
    </Box>
  );
}

const getColumns = () => {
  return [
    { title: 'Name', field: 'name' },
    {
      title: 'Rarity',
      field: 'rarity',
      lookup: getRarityLookup(),
      customSort: (a, b) => a.rarity - b.rarity,
    },
    { title: 'Sources', field: 'sources' },
    { title: 'Strength', field: 'strength', type: 'numeric' },
    { title: 'Vitality', field: 'vitality', type: 'numeric' },
    { title: 'Agility', field: 'agility', type: 'numeric' },
    { title: 'Intelligence', field: 'intelligence', type: 'numeric' },
    { title: 'Defense', field: 'defense', type: 'numeric' },
  ];
};

const getRarityLookup = () => {
  return {
    1: 'Very Common',
    2: 'Common',
    3: 'Uncommon',
    4: 'Semi Rare',
    5: 'Rare',
    6: 'Very Rare',
    7: 'Ultra Rare',
    8: 'Hyper Rare',
  };
};
