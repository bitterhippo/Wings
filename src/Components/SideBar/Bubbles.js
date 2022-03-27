import React, { useState } from 'react';
import { Link } from "react-router-dom";

//Subcomponents
import Colors from '../Colors';
import { FiLogIn, FiUserPlus, FiInfo, FiSettings, FiUsers } from "react-icons/fi";

export const Bubbles = ({ iconName, route }) => {

  const [selected, setSelected] = useState(false);

  const components = {
    LogIn: <FiLogIn color={selected ? Colors.Green : Colors.AshBlack} size={24} />,
    SignUp: <FiUserPlus color={selected ? Colors.Green : Colors.AshBlack} size={24} />,
    Info: <FiInfo color={selected ? Colors.Green : Colors.AshBlack} size={24} />,
    Settings: <FiSettings color={selected ? Colors.Green : Colors.AshBlack} size={24} />,
    Community: <FiUsers color={selected ? Colors.Green : Colors.AshBlack} size={24} />
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
      <Link to={route}>
        <div style={styles.iconContainer}>
          {components[iconName]}

        </div>
      </Link>
      {/* Floating Text Render Condiiton */}
      <div
        style={{ ...styles.bubbleText, display: !selected ? 'none' : '' }}
      >
        {iconName}
      </div>
    </div >
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
  },
  bubbleText: {
    position: 'absolute',
    backgroundColor: 'white',
    zIndex: 1,
    border: `1px solid ${Colors.DeepBlack}`,
    padding: '3px 5px',
    marginTop: '10px',
    borderRadius: '5px'
  }
};