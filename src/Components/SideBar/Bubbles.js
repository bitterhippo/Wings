import React, { useState } from 'react';

//Subcomponents
import Colors from '../Colors';
import { FiLogIn, FiUserPlus } from "react-icons/fi";

export const Bubbles = ({ iconName }) => {

  const [selected, setSelected] = useState(false);

  const components = {
    LogIn : <FiLogIn color={selected ? Colors.Green : Colors. AshBlack} size={24} />,
    SignUp : <FiLogIn color={selected ? Colors.Green : Colors. AshBlack} size={24} />
  }

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
        {components[iconName]}
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