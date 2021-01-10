import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { SketchPicker } from 'react-color';

const ColorPickerPopover = (props) => {
  const {
    color,
    handleUpdateColor,
    colorPickerPopoverState,
    setColorPickerPopoverState,
  } = props;

  const colorPickerPopoverStyle = {
    position: 'absolute',
    zIndex: '100',
  };

  const colorPickerCoverStyle = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  };

  const handleCloseColorPickerPopover = () => {
    setColorPickerPopoverState(false);
  };

  if (colorPickerPopoverState)
    return (
      <div style={colorPickerPopoverStyle}>
        <div style={colorPickerCoverStyle} onClick={handleCloseColorPickerPopover} />
        <SketchPicker color={color} onChangeComplete={(e) => handleUpdateColor(e)} />
      </div>
    );

  return <div />;
};

const ColorPickerSystem = (props) => {
  const { color, handleUpdateColor } = props;

  const [colorPickerPopoverState, setColorPickerPopoverState] = useState(false);

  const handleClickColorPicker = () => {
    setColorPickerPopoverState((oldState) => !oldState);
  };

  return (
    <>
      <Button
        variant="contained"
        style={{ height: '100%', backgroundColor: color }}
        onClick={handleClickColorPicker}
      />
      <ColorPickerPopover
        color={color}
        colorPickerPopoverState={colorPickerPopoverState}
        setColorPickerPopoverState={setColorPickerPopoverState}
        handleUpdateColor={handleUpdateColor}
      />
    </>
  );
};

export default ColorPickerSystem;
