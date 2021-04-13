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
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles( (theme) => ({
  table: {
    minWidth: 650,
  },
  btn: {
    marginLeft: theme.spacing(1),
    borderRadius: '30px'
  },
}));

function createData(date, codingScore, communicationScore) {
  return { date, codingScore, communicationScore };
}

const rows = [
    createData('Monday, May 25, 2020', 5, 4),
    createData('Wednesday, May 27, 2020', 3, 5),
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
            <StyledTableCell>Held on</StyledTableCell>
            <StyledTableCell align='center'>Coding</StyledTableCell>
            <StyledTableCell align='center'>Communication</StyledTableCell>
            <StyledTableCell align='center'>Questions</StyledTableCell>
            <StyledTableCell align='center'>Detailed Feedback</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.date}>
              <StyledTableCell>{row.date}</StyledTableCell>
              <StyledTableCell align='center'>
                <Rating name="read-only" value={row.codingScore} readOnly />
              </StyledTableCell>
              <StyledTableCell align='center'>
                <Rating name="read-only" value={row.communicationScore} readOnly />
              </StyledTableCell>
                <StyledTableCell align='center'>
                    <Button variant='outlined' className={classes.btn}>View</Button>
                </StyledTableCell>
                <StyledTableCell align='center'>
                    <Button variant='outlined' className={classes.btn}>View</Button>
                </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>  
    </Box>
    
  );
}
