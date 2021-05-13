import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Modal from './modal';
import {StyledTableCell, StyledTableRow, useStyles} from '../Style/table'

const body = (
  <div>
    <h2 id="simple-modal-title">Text in a modal</h2>
    <p id="simple-modal-description">
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </p>
  </div>
);

export default function CustomizedTables(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

const handleOpen = () => {
  setOpen(true);
  
};
  return (
    <TableContainer component={Paper}>
      <Modal
        open={open}
        body={body}
      />
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Time</StyledTableCell>
            <StyledTableCell align="left">Flight&nbsp;Name:</StyledTableCell>
            <StyledTableCell align="left">Status</StyledTableCell>
            <StyledTableCell align="left">Code</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.scheduledDeparture}
              </StyledTableCell>
              <StyledTableCell align="left">
                {row.destinationPortCode} - {row.destinationPortName} 
              </StyledTableCell>
              <StyledTableCell align="left">
                {row.status}
              </StyledTableCell>
              <StyledTableCell align="left">
              {row.flightCode} - {row.flightProvider}
              </StyledTableCell>
              <StyledTableCell align="right">
                <button onClick={() => props.deleteRow(row.id)}>Delete</button>
                <Link href="#" onClick={handleOpen}>
                  {'More details =>'}
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
