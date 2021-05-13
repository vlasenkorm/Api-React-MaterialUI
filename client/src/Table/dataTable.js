import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Modal from '@material-ui/core/Modal';
import {StyledTableCell, StyledTableRow, useStyles} from '../Style/table'


function getModalStyle() {
  const top = 50
  const left = 50 

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}



export default function CustomizedTables(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);


  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

const handleOpen = () => {
  setOpen(true);
  
};

const handleClose = () => {
  setOpen(false);
};
  return (
    <TableContainer component={Paper}>
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
                <Link href="#" onClick={handleOpen}>
                  {'More details =>'}
                </Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </TableContainer>
  );
}
