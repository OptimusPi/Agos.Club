import React from 'react';
import { Box } from '@material-ui/core';
import Table from '../components/Table';
import { getHatData } from '../utils/data';
import { getHatImageFromName } from '../utils/images';

export default function Hats() {
  return (
    <Box my={2} mx={2}>
      <Table
        tableName="Hats"
        dataCall={getHatData}
        getImageFromNameCall={getHatImageFromName}
        getColumnsCall={getColumns}
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
    { title: 'Strength', field: 'strength', type: 'numeric', render: (rowData) => render(rowData.strength) },
    { title: 'Vitality', field: 'vitality', type: 'numeric', render: (rowData) => render(rowData.vitality) },
    { title: 'Agility', field: 'agility', type: 'numeric', render: (rowData) => render(rowData.agility) },
    {
      title: 'Intelligence',
      field: 'intelligence',
      type: 'numeric',
      render: (rowData) => render(rowData.intelligence),
    },
    { title: 'Defense', field: 'defense', type: 'numeric', render: (rowData) => render(rowData.defense) },
  ];
};

const render = (dataPoint) => {
  return dataPoint === -1 ? '?' : dataPoint;
};

const getRarityLookup = () => {
  return {
    0: 'Unobtainable',
    1: 'Very Common',
    2: 'Common',
    3: 'Uncommon',
    4: 'Semi Rare',
    5: 'Rare',
    6: 'Very Rare',
    7: 'Ultra Rare',
    8: 'Hyper Rare',
    100: 'Unknown',
  };
};
