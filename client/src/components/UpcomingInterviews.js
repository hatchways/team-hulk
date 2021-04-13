import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles( (theme) => ({
  table: {
    minWidth: 650,
  },
  btn: {
    marginLeft: theme.spacing(1),
    borderRadius: '30px'
  },
}));

function createData(date, theme) {
  return { date, theme };
}

const rows = [
    createData('Monday, May 25, 2020', 'Simple Array Sum'),
    createData('Wednesday, May 27, 2020', 'Diagonal Difference'),
    createData('Saturday, May 30, 2020', 'Plus Minus'),
    createData('Monday, June 1, 2020', 'Time Conversion'),
];

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      fontSize: 16,
      fontWeight: '600'
    },
    body: {
      fontSize: 14,
      fontWeight: '400'
    },
}))(TableCell);
  

export default function UpcomingInterviews() {
  const classes = useStyles();

  return (
    <Box mt={3}>
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>When</StyledTableCell>
            <StyledTableCell>Interview Theme</StyledTableCell>
            <StyledTableCell>Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.date}>
              <StyledTableCell>{row.date}</StyledTableCell>
              <StyledTableCell>{row.theme}</StyledTableCell>
                <StyledTableCell align="right">
                    <Button variant='outlined' className={classes.btn}>CANCEL</Button>
                    <Button variant='outlined' className={classes.btn}>RESCHEDULE</Button>
                </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>  
    </Box>
    
  );
}
