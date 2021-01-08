import React from 'react';
import MaterialTable from 'material-table';
import { Box, Typography } from '@material-ui/core';
import { getTableIcons } from '../utils/table';
import { getWeaponData } from '../utils/data';
import WeaponsCard from '../components/WeaponsCard';
import { getWeaponImageFromName } from '../utils/images';

export default function Weapons() {
  return (
    <Box my={4} mx={4}>
      <Typography variant="subtitle1" color="secondary" gutterBottom>
        Note: Please let me know if something is wrong or if you have any suggestions in{' '}
        <a href="https://discord.com/channels/301473545735897108/795724403291193364" target="_blank">
          #fan_based
        </a>
      </Typography>
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
          exportButton: true,
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
  return {
    1: 'Very Common',
    2: 'Common',
    3: 'Uncommon',
    4: 'Semi Rare',
    5: 'Rare',
    6: 'Very Rare',
    7: 'Ultra Rare',
    9: 'Hyper Rare',
  };
};
