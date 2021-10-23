import React from 'react';
import { Box } from '@material-ui/core';
import Table from '../components/Table';
import { getWeaponData } from '../utils/data';
import { getWeaponImageFromName } from '../utils/images';

export default function Weapons() {
  return (
    <Box my={2} mx={2}>
      <Table
        tableName="Weapons"
        dataCall={getWeaponData}
        getImageFromNameCall={getWeaponImageFromName}
        getColumnsCall={getColumns}
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
