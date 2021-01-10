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

const RepoInfoInputCard = (props) => {
  const {
    repoInfo: { homeRepoOwner, homeRepoName, templateRepoOwner, templateRepoName },
    setRepoInfo,
  } = props;

  const classes = useStyles();

  const handleUpdateHomeRepoOwner = (e) => {
    const newValue = e.target.value;
    setRepoInfo((oldState) => ({
      ...oldState,
      homeRepoOwner: newValue,
    }));
  };

  const handleUpdateHomeRepoName = (e) => {
    const newValue = e.target.value;
    setRepoInfo((oldState) => ({
      ...oldState,
      homeRepoName: newValue,
    }));
  };

  const handleUpdateTemplateRepoOwner = (e) => {
    const newValue = e.target.value;
    setRepoInfo((oldState) => ({
      ...oldState,
      templateRepoOwner: newValue,
    }));
  };

  const handleUpdateTemplateRepoName = (e) => {
    const newValue = e.target.value;
    setRepoInfo((oldState) => ({
      ...oldState,
      templateRepoName: newValue,
    }));
  };

  return (
    <Paper elevation={2} className={classes.paper}>
      <form className={classes.form} noValidate autoComplete="off">
        <div>Manage your repository</div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Repository owner"
              value={homeRepoOwner}
              required
              fullWidth
              variant="filled"
              onChange={handleUpdateHomeRepoOwner}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Repository name"
              value={homeRepoName}
              required
              fullWidth
              variant="filled"
              onChange={handleUpdateHomeRepoName}
            />
          </Grid>
        </Grid>
        <div>Copy from a repository (Optional)</div>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Repository owner"
              value={templateRepoOwner}
              fullWidth
              variant="filled"
              onChange={handleUpdateTemplateRepoOwner}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Repository name"
              value={templateRepoName}
              fullWidth
              variant="filled"
              onChange={handleUpdateTemplateRepoName}
            />
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default RepoInfoInputCard;
