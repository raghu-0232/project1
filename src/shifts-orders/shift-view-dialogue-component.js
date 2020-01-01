import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ShiftViewComponent from './shift-view-component';
import './shift-view-dialogue-component.css'
const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShiftViewDialogue(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);



  const handleClose = () => {
    setOpen(false);
    props.onClose();
  };

  return (
    <div>
      <Dialog className="dialogue-container" fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <Toolbar >
            <IconButton className="dialogue-close" edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        <ShiftViewComponent type={props.type} />
      </Dialog>
    </div>
  );
}