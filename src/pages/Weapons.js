import React from 'react';
import MaterialTable from 'material-table';
import { Box } from '@material-ui/core';
import { getTableIcons } from '../utils/table';
import { getWeaponData } from '../utils/data';
import WeaponsCard from '../components/WeaponsCard';
import { getWeaponImageFromName } from '../utils/images';

export default function Weapons() {
  return (
    <Box my={2} mx={2}>
      <MaterialTable
        title="Weapons"
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
          exportFileName: 'Agos Weapons Data',
          maxBodyHeight: 'calc(100vh - 200px)',
        }}
        icons={getTableIcons()}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
        columns={getColumns()}
        data={getWeaponData()}
        detailPanel={(rowData) => {
          return (
            <WeaponsCard
              name={rowData.name}
              description={rowData.description}
              holders={rowData.holders}
              nicknames={rowData.nicknames}
              traits={rowData.traits}
              value={rowData.value}
              image={getWeaponImageFromName(rowData.name)}
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
    { title: 'Rarity', field: 'rarity', lookup: getRarityLookup(), customSort: (a, b) => a.rarity - b.rarity },
    { title: 'Sources', field: 'sources' },
    { title: 'Power', field: 'power', lookup: getStarLookup() },
    { title: 'Stamina', field: 'stamina', lookup: getStarLookup() },
    { title: 'Cooldown', field: 'cooldown', lookup: getStarLookup() },
    { title: 'Speed', field: 'speed', lookup: getStarLookup() },
    { title: 'Stamina Cost ', field: 'staminaCost' },
  ];
};

const getStarLookup = () => {
  return { 0: '❔', 1: '⭐', 2: '⭐⭐', 3: '⭐⭐⭐', 4: '⭐⭐⭐⭐', 5: '⭐⭐⭐⭐⭐' };
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
