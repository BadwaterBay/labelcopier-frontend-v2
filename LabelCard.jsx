import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import ColorPickerSystem from './ColorPickerSystem';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const LabelCard = (props) => {
  const {
    label: { id, name, description, color },
    setLabels,
  } = props;

  const classes = useStyles();

  const handleUpdateName = (e) => {
    const newValue = e.target.value;
    setLabels((oldLabels) =>
      oldLabels.map((label) => {
        if (label.id === id) {
          return {
            ...label,
            name: newValue,
          };
        }
        return label;
      })
    );
  };

  const handleUpdateColor = (e) => {
    const newValue = e.hex;
    setLabels((oldLabels) =>
      oldLabels.map((label) => {
        if (label.id === id) {
          return {
            ...label,
            color: newValue,
          };
        }
        return label;
      })
    );
  };

  const handleUpdateDescription = (e) => {
    const newValue = e.target.value;
    setLabels((oldLabels) =>
      oldLabels.map((label) => {
        if (label.id === id) {
          return {
            ...label,
            description: newValue,
          };
        }
        return label;
      })
    );
  };

  return (
    <Paper className={classes.paper} elevaton={0}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <TextField
            label="Name"
            value={name}
            required
            fullWidth
            variant="filled"
            onChange={handleUpdateName}
          />
        </Grid>
        <Grid item xs={3}>
          <ColorPickerSystem color={color} handleUpdateColor={handleUpdateColor} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            value={description}
            fullWidth
            variant="filled"
            onChange={handleUpdateDescription}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LabelCard;
