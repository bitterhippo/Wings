import React, { useState } from 'react';

//Subcomponents
import Colors from '../Colors';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export const CustomPicker = ({ header, children }) => {

  const [open, toggleOpen] = useState(false)

  return (
    <span >
      <div
        style={styles.pickerWrapper}
        onClick={() => toggleOpen(previousState => !previousState)}
      >
        <div style={styles.headerRow}>
          <span>{header}</span>
          <span style={styles.icon}>{!open ? <FiChevronDown /> : <FiChevronUp />}</span>
        </div>
        {open &&
          <div
            style={{ ...styles.hiddenContent, display: open ? 'show' : '' }}>
            {children}
          </div>}
      </div>
    </span>
  )
};

const styles = {
  pickerWrapper: {
    cursor: 'pointer',
    border: '1px solid black',
    width: 90,
    backgroundColor: 'white',
    textAlign: 'center',
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    color: Colors.AshBlack,
  },
  openHeader: {
    borderBottom: '1px solid black'
  },
  headerRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 3
  },
  icon: {
    marginTop: 2
  },
};