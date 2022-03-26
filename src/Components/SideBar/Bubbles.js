import React, { useState } from 'react';

//Subcomponents
import Colors from '../Colors';
import { FiLogIn, FiUserPlus } from "react-icons/fi";

export const Bubbles = ({ icon }) => {

  const [selected, setSelected] = useState(false);

  return (
    <div
      style={
        {
          ...styles.bubbleWrapper,
          border: selected ? `3px solid ${Colors.Green}` : '3px solid white'
        }
      }
      onMouseEnter={() => setSelected(!selected)}
      onMouseLeave={() => setSelected(!selected)}
    >
      <div style={styles.iconContainer}>
        <FiLogIn
        color={selected ? Colors.Green : Colors.AshBlack}
        size={24} 
        />
      </div>
    </div>
  )
};

const styles = {
  bubbleWrapper: {
    textAlign: 'center',
    margin: 'auto',
    borderRadius: 30,
    height: 40,
    width: 40,
    backgroundColor: 'white'
  },
  iconContainer: {
    paddingTop: 8
  }
};