import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import LabelCardList from './LabelCardList';

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

const tabPanelProps = (index) => ({
  id: `scrollable-auto-tab-${index}`,
  'aria-controls': `scrollable-auto-tabpanel-${index}`,
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
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
}));

const ManagementCard = (props) => {
  const { labels, setLabels } = props;

  const classes = useStyles();

  const [activeTabId, setActiveTabId] = useState(0);

  const handleChangeTab = (_event, latestActiveTabId) => {
    setActiveTabId(latestActiveTabId);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={activeTabId}
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Labels" {...tabPanelProps(0)} />
          <Tab label="Milestones" {...tabPanelProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={activeTabId} index={0}>
        <Paper elevation={2} className={classes.paper}>
          <Button variant="contained">New label</Button>
          <LabelCardList labels={labels} setLabels={setLabels} />
        </Paper>
      </TabPanel>
      <TabPanel value={activeTabId} index={1}>
        <Paper elevation={2} className={classes.paper}>
          Manage milestones
        </Paper>
      </TabPanel>
    </div>
  );
};

export default ManagementCard;
