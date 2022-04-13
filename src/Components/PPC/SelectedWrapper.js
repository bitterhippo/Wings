import React, { useState } from 'react';
import Colors from '../Colors';

//Subcomponents

export const SelectedWrapper = (props) => {

  const [selected, toggledSelected] = useState(false);

  return (
    <div
      style={selected ? styles.selected : styles.unselected}
      onMouseEnter={() => toggledSelected(!selected)}
      onMouseLeave={() => toggledSelected(!selected)}
    >
      {props.children}
    </div>
  )
}

const styles = {
  selected: {
    backgroundColor: Colors.Green,
    color: 'white',
    cursor: 'pointer'
  },
  unselected: {
    backgroundColor: 'white'
  }
};