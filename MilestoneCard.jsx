import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
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
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 180,
  },
}));

const MilestoneCard = (props) => {
  const {
    milestone: { id, state, title, description, dueOn },
    setMilestones,
  } = props;

  const classes = useStyles();

  const getNewValueFunc = (prop) => {
    const getNewValueFuncLookupTable = {
      title: (e) => e.target.value,
      description: (e) => e.target.value,
      state: (e) => e.target.value,
      dueOn: (e) => e.target.value,
    };
    return getNewValueFuncLookupTable[prop];
  };

  const handleUpdateMilestoneProps = (prop, e) => {
    const getNewValue = getNewValueFunc(prop);
    const newValue = getNewValue(e) || null;
    setMilestones((oldMilestones) =>
      oldMilestones.map((milestone) => {
        if (milestone.id === id) {
          return {
            ...milestone,
            [prop]: newValue,
          };
        }
        return milestone;
      })
    );
  };

  const handleUpdateTitle = (e) => {
    handleUpdateMilestoneProps('title', e);
  };

  const handleUpdateDescription = (e) => {
    handleUpdateMilestoneProps('description', e);
  };

  const handleUpdateState = (e) => {
    handleUpdateMilestoneProps('state', e);
  };

  const milestoneStateOptions = [
    { state: 'open', label: 'Open' },
    { state: 'closed', label: 'Closed' },
  ];

  const handleUpdateDueOn = (e) => {
    handleUpdateMilestoneProps('dueOn', e);
  };

  return (
    <Paper className={classes.paper} elevaton={0}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Title"
            value={title}
            required
            fullWidth
            variant="standard"
            onChange={handleUpdateTitle}
          />
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
        <Grid item xs={6}>
          <TextField
            select
            label="State"
            fullWidth
            value={state}
            SelectProps={{ native: true }}
            onChange={handleUpdateState}
          >
            {milestoneStateOptions.map((option) => (
              <option key={option.state} value={option.state}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Due on"
            type="date"
            className={classes.textField}
            defaultValue={dueOn}
            onChange={handleUpdateDueOn}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default MilestoneCard;
