import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getComboData } from '../utils/data';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 'calc(100vh - 200px)',
  },
  header: {
    backgroundColor: theme.palette.primary.light,
  },
}));

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function CombosTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table aria-label="simple table">
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Combo</TableCell>
            <TableCell align="left">Effects</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getComboData().map((row) => (
            <StyledTableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.combo}</TableCell>
              <TableCell align="left">{row.effects}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
