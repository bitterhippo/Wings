import React, { useState } from 'react';

//Subcomponents

export const CustomPicker = ({header, children }) => {

  const [open, toggleOpen] = useState(false)

  return (
    <div
      style={styles.pickerWrapper}
      onClick={() => toggleOpen(previousState => !previousState)}
    >
      {header}
      {open &&
        <div
          style={{...styles.hiddenContent, display: open ? 'show' : ''}}>
          {children}
        </div>}
    </div>
  )
};

const styles = {
  pickerWrapper: {
    cursor: 'pointer'
  },
  hiddenContent: {
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    backgroundColor: 'white',
    border: '1px solid black',
    width: 100,
    textAlign: 'center'
  }
};