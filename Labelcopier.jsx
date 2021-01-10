import React, { useState } from 'react';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import defaultRepoInfo from './defaultRepoInfo';
import RepoInfoInputCard from './RepoInfoInputCard';
import ManagementCard from './ManagementCard';

const Labelcopier = () => {
  const [repoInfo, setRepoInfo] = useState(defaultRepoInfo);

  const demoLabel = {
    id: '123456',
    name: 'Dummy label',
    description: 'This is a demo label',
    color: '#ffaa05',
  };

  const existingLabels = [demoLabel];
  const [labels, setLabels] = useState(existingLabels);

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
            <ManagementCard labels={labels} setLabels={setLabels} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Labelcopier;
