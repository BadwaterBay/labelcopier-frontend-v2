import React, { useState } from 'react';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import defaultRepoInfo from './defaultRepoInfo';
import RepoInfoInputCard from './RepoInfoInputCard';
import ManagementCard from './ManagementCard';
import dummyLabels from './dummyLabels';

const Labelcopier = () => {
  const [repoInfo, setRepoInfo] = useState(defaultRepoInfo);
  console.log(repoInfo);

  const existingLabels = dummyLabels;
  const [labels, setLabels] = useState(existingLabels);
  console.log(labels);

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
