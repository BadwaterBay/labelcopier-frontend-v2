import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import NewLabel from './NewLabel';

const styles = (theme) => ({
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
  tabs: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

class Labelcopier extends Component {
  constructor() {
    super();

    this.displayData = [];

    // this.state = {
    //   showdata: this.displayData,
    //   postVal: 'A NEW LABEL',
    // };

    this.prependData = this.prependData.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(e) {
  //   let getTextAreaValue = e.target.value;
  //   this.setState({
  //     postVal: getTextAreaValue,
  //   });
  // }

  prependData() {
    this.displayData.unshift(<NewLabel key={uuidv4()} />);

    this.setState({
      //   showdata: this.displayData,
      // postVal: '',
    });
  }

  render() {
    const { classes } = this.props;

    const repoCard = (
      <Paper elevation={2} className={classes.paper}>
        <form className={classes.form} noValidate autoComplete="off">
          <div>Manage your repository</div>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField label="Repository owner" required fullWidth variant="filled" />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Repository" required fullWidth variant="filled" />
            </Grid>
          </Grid>
          <div>Copy from a repository</div>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField label="Repository owner" fullWidth variant="filled" />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Repository" fullWidth variant="filled" />
            </Grid>
          </Grid>
        </form>
      </Paper>
    );

    const TabPanel = (props) => {
      const { children, value, index, ...other } = props;

      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`scrollable-auto-tabpanel-${index}`}
          aria-labelledby={`scrollable-auto-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box p={3}>
              <Typography component="div">{children}</Typography>
            </Box>
          )}
        </div>
      );
    };

    TabPanel.propTypes = {
      children: PropTypes.node,
      index: PropTypes.any.isRequired,
      value: PropTypes.any.isRequired,
    };

    const a11yProps = (index) => ({
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    });

    const ManagementCard = () => {
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };

      return (
        <div className={classes.tabs}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="Labels" {...a11yProps(0)} />
              <Tab label="Milestones" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <Paper elevation={2} className={classes.paper}>
              <Button variant="contained" onClick={this.prependData} value="">
                New label Button
              </Button>
              {this.displayData}
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Paper elevation={2} className={classes.paper}>
              Manage milestones
            </Paper>
          </TabPanel>
        </div>
      );
    };

    return (
      <div>
        <ScopedCssBaseline />
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <h2>Labelcopier</h2>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained">Login with GitHub</Button>
            </Grid>
            <Grid item xs={12}>
              {repoCard}
            </Grid>
            <Grid item xs={12}>
              <ManagementCard />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Labelcopier);
