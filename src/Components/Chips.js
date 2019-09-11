import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import { MdLaptop } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { IoIosBrush } from "react-icons/io";
import { IoIosBed } from "react-icons/io";
import { IoMdGlasses } from "react-icons/io";
import { IoMdWatch } from "react-icons/io";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function SmallOutlinedChips() {
  const classes = useStyles();

  function handleDelete() {
    alert('You clicked the delete icon.');
  }

  function handleClick() {
    alert('You clicked the Chip.');
  }

  return (
    <div className={classes.root}>
    
     
    <Chip
        variant="outlined"
        size="small"
        icon={<MdPhoneIphone />}
        label="Mobile"
        clickable
        className={classes.chip}
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        variant="outlined"
        size="small"
        icon={<MdLaptop />}
        label="Laptop"
        clickable
        className={classes.chip}
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
       <Chip
        variant="outlined"
        size="small"
        icon={<IoIosBrush />}
        label="Dressing "
        clickable
        className={classes.chip}
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
       <Chip
        variant="outlined"
        size="small"
        icon={<IoIosBed />}
        label="Furniture"
        clickable
        className={classes.chip}
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
       <Chip
        variant="outlined"
        size="small"
        icon={<IoMdGlasses />}
        label="Glasses"
        clickable
        className={classes.chip}
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
       <Chip
        variant="outlined"
        size="small"
        icon={<IoMdWatch />}
        label="Watch"
        clickable
        className={classes.chip}
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
     
      
    </div>
  );
}