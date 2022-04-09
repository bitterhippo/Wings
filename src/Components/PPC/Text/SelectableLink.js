import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//Subcomponents
import Colors from '../../Colors';

export const SelectableLink = (props) => {

  const [selected, toggledSelected] = useState(false);

  return (
    <div
      style={{
        ...styles.selectableLink, 
        backgroundColor: selected ? Colors.Green : 'white'
      }}
      onMouseEnter={() => toggledSelected(!selected)}
      onMouseLeave={() => toggledSelected(!selected)}
    >
      <Link
        style={{ ...styles.styledLink, ...selected ? styles.selectedText : styles.unselectedText }}
        to={props.to}
        state={props.state}
      >
        {props.children}
      </Link>
    </div>
  )
}

const styles = {
  selectableLink: {
    color: 'white',
    cursor: 'pointer',
    margin: '2px 0px',
  },
  styledLink: {
    textDecoration: 'none',
    color: `${Colors.Crimson}`,
  },
  selectedText: {
    color: 'white'
  },
  unselectedText: {
    color: Colors.AshBlack
  }
};