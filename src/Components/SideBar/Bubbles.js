import React, { useState } from 'react';
import { Link } from "react-router-dom";

//Subcomponents
import Colors from '../Colors';
import { FiLogIn, FiUserPlus, FiInfo, FiSettings, FiUsers, FiTool, FiLogOut } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

export const Bubbles = ({ iconName, route, external }) => {

  const [selected, setSelected] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  //Icon Barrel

  const components = {
    LogIn: <FiLogIn color={selected ? Colors.Green : Colors.AshBlack} size={24} />,
    SignUp: <FiUserPlus color={selected ? Colors.Green : Colors.AshBlack} size={24} />,
    Info: <FiInfo color={selected ? Colors.Green : Colors.AshBlack} size={24} />,
    Settings: <FiSettings color={selected ? Colors.Green : Colors.AshBlack} size={24} />,
    Tools: <FiTool color={selected ? Colors.Green : Colors.AshBlack} size={24} />,
    Community: <FiUsers color={selected ? Colors.Green : Colors.AshBlack} size={24} />,
    Discord: <FaDiscord color={selected ? Colors.Green : Colors.AshBlack} size={28} />,
    LogOut: <FiLogOut color={selected ? Colors.Green : Colors.AshBlack} size={24} />,
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
      {
        !external
          ?
          <Link to={route}>
            <div style={styles.iconContainer}>
              {components[iconName]}

            </div>
          </Link>
          :
          <a href={route}
            style={styles.iconContainer}
          >
            <div style={styles.iconContainer}>
              {components[iconName]}

            </div>
          </a>
      }
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