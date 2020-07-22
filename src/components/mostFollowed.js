import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 1,
  },
});

function createData(User,Followers,Country) {
  return {User,Followers,Country};
}

const rows = [
  createData('Will Smith',159,'USA'),
  createData('Brent Rivera',30.5,'USA'),
  createData('Dixie DAmelio',29.8,'USA' ),
  createData('Jason Derulo',29.0,'USA' ),
  createData('Arishfa Khan',28.4,1139.5, 'India' ),
  createData('jannat_zubair29',28.0,'India' ),
  createData('nishaguragain',28.0,'India' ),
  createData('gilmhercroes',27.9,'Aruba'  ),
  createData('therock',27.5,'USA' ),
  createData('tsjojosiwa',26.6,'USA' ),
  createData('flighthouse',26.0,'USA'  ),

];

export default function MostFollowed() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>User </TableCell>
            <TableCell align="right">Followers</TableCell>
            <TableCell align="right">Country</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.User}>
              <TableCell component="th" scope="row">
                {row.User}
              </TableCell>
              <TableCell align="right">{row.Followers}</TableCell>
              <TableCell align="right">{row.Country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
