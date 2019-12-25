import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
// import PersonIcon from '@material-ui/icons/Person';
// import AddIcon from '@material-ui/icons/Add';
// import Typography from '@material-ui/core/Typography';
// import { blue } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import  LgInputFeild from './InputFeild';
import ProgressBar from './progress-bar';
import { borderRight } from '@material-ui/system';
import { tsConstructorType } from '@babel/types';



// const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  close: {
    float:'right'
  },
});

export default function AddEmployeeDailog(props) {
  const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog  onClose={handleClose} aria-labelledby="Add Employee" open={open} id="add-new-employee">
        <DialogTitle id="simple-dialog-title">Add Employee <span className={classes.close} onClick={handleClose}>X</span></DialogTitle>
        <DialogContent>
          <center><ProgressBar/></center>
          <Grid container>
              <Grid item xs={6}>
                  <LgInputFeild label={'Employee Name*'} />
              </Grid>
              <Grid item xs={6}>
              <LgInputFeild/>
              </Grid>
              <Grid item xs={6}>
                  <LgInputFeild label={'Role'}/>
              </Grid>
              <Grid item xs={6}>
                  <LgInputFeild label={'Skill Level'}/>
              </Grid>
              <Grid item xs={6}>
                  <LgInputFeild label={'Mobile Number *'}/>
              </Grid>
              <Grid item xs={6}>
                  <LgInputFeild label={'Email address'}/>
              </Grid>
              <Grid item xs={6}>
                  <LgInputFeild label={'SS No'}/>
              </Grid>
              <Grid item xs={6}>
                <LgInputFeild label={'City/Location'}/>
              </Grid>
              <Grid item xs={12}>
                  <LgInputFeild label={'Address'} />
              </Grid>
          </Grid>
        </DialogContent>
    </Dialog>
  );
}

AddEmployeeDailog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};