import React from 'react';
import MaterialTable from 'material-table';
import { Box } from '@material-ui/core';
import { getTableIcons } from '../utils/table';
import { getWeaponData } from '../utils/data';
import WeaponsCard from '../components/WeaponsCard';
import { getWeaponImageFromName } from '../utils/images';

export default function Weapons() {
  return (
    <Box my={4} mx={4}>
      <MaterialTable
        title="Agos Weapons"
        options={{
          toolbar: true,
          showTitle: true,
          selection: false,
          filtering: true,
          search: false,
          sorting: true,
          pageSize: 10,
          pageSizeOptions: [10, 20, 50],
          headerStyle: { position: 'sticky', top: 0 },
          maxBodyHeight: '80vh',
          exportButton: false,
          exportFileName: 'Agos Weapons Data',
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
              image={getWeaponImageFromName(rowData.name)}
            />
          );
        }}
      />
    </Box>
  );
}

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

const getColumns = () => {
  return [
    { title: 'Name', field: 'name' },
    { title: 'Rarity', field: 'rarity', lookup: getRarityLookup() },
    { title: 'Power', field: 'power', lookup: getStarLookup() },
    { title: 'Stamina', field: 'stamina', lookup: getStarLookup() },
    { title: 'Cooldown', field: 'cooldown', lookup: getStarLookup() },
    { title: 'Speed', field: 'speed', lookup: getStarLookup() },
    {
      title: 'Sell Value',
      field: 'value',
      type: 'number',
      render: (rowData) => '$' + formatNumber(rowData.value) + ' coinz',
    },
    { title: 'Sources', field: 'sources' },
  ];
};

const getStarLookup = () => {
  return { 1: '⭐', 2: '⭐⭐', 3: '⭐⭐⭐', 4: '⭐⭐⭐⭐', 5: '⭐⭐⭐⭐⭐' };
};

const getRarityLookup = () => {
  return { 1: 'Common', 2: 'Moderate', 3: 'Rare', 4: 'Ultra Rare', 5: 'Mega Rare' };
};
