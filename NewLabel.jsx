import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { SketchPicker } from 'react-color';

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
});

class NewLabel extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: '',
      pickedColor: '#ffad05',
      displayColorPicker: false,
    };
  }

  handleChangeName = (e) => {
    console.log(`New name is: ${e.target.value}`);
    this.setState({ name: e.target.value });
  };

  handleChangeDescription = (e) => {
      console.log(`New name is: ${e.target.value}`);
      this.setState({ description: e.target.description });
  };

  handleClickColorPicker = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
    console.log('Toggle color picker');
  };

  handleCloseColorPicker = () => {
    this.setState({ displayColorPicker: false });
    console.log('Close color picker');
  };

  handleChangeColor = (color, event) => {
    this.setState({ pickedColor: color.hex });
  };

  render() {
    const { classes } = this.props;

    const colorpicker_popover = {
      position: 'absolute',
      zIndex: '100',
    };

    const colorpicker_cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    };

    return (
      <Paper className={classes.paper} elevaton={0} key={uuidv4()}>
        {this.state.postVal}
        <Grid container spacing={3}>
          <Grid item xs={9}>
            <TextField
              label="Name"
              required
              fullWidth
              variant="filled"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              style={{ height: '100%', backgroundColor: this.state.pickedColor }}
              onClick={this.handleClickColorPicker}
            />
            {this.state.displayColorPicker ? (
              <div style={colorpicker_popover}>
                <div style={colorpicker_cover} onClick={this.handleCloseColorPicker} />
                <SketchPicker
                  color={this.state.pickedColor}
                  onChangeComplete={this.handleChangeColor}
                />
              </div>
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <TextField label="Description" fullWidth variant="filled" />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(NewLabel);
