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

  const getNewValueFunc = (prop) => {
    const getNewValueFuncLookupTable = {
      name: (e) => e.target.value,
      color: (e) => e.hex,
      description: (e) => e.target.value,
    };
    return getNewValueFuncLookupTable[prop];
  };

  const handleUpdateLabelProps = (prop, e) => {
    const getNewValue = getNewValueFunc(prop);
    const newValue = getNewValue(e) || null;
    setLabels((oldLabels) =>
      oldLabels.map((label) => {
        if (label.id === id) {
          return {
            ...label,
            [prop]: newValue,
          };
        }
        return label;
      })
    );
  };

  const handleUpdateName = (e) => {
    handleUpdateLabelProps('name', e);
  };

  const handleUpdateColor = (e) => {
    handleUpdateLabelProps('color', e);
  };

  const handleUpdateDescription = (e) => {
    handleUpdateLabelProps('description', e);
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
            variant="standard"
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
            variant="standard"
            onChange={handleUpdateDescription}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LabelCard;
