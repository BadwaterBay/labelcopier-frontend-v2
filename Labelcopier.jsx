import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ManagementCard from './ManagementCard';
import RepoInfoInputCard from './RepoInfoInputCard';

const Labelcopier = () => {
  const defaultRepoInfo = {
    homeRepoOwner: '',
    homeRepoName: '',
    templateRepoOwner: '',
    templateRepoName: '',
  };

  const [repoInfo, setRepoInfo] = useState(defaultRepoInfo);

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
            <RepoInfoInputCard repoInfo={repoInfo} setRepoInfo={setRepoInfo} />
          </Grid>
          <Grid item xs={12}>
            <ManagementCard />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Labelcopier;
