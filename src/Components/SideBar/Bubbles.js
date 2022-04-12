import React, { useState } from 'react';
import { Link } from "react-router-dom";

//Subcomponents
import Colors from '../Colors';
import { FiLogIn, FiUserPlus, FiInfo, FiSettings, FiUsers, FiTool, FiLogOut, FiGlobe } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";

export const Bubbles = ({ iconName, route, external, drawer }) => {

  const [selected, setSelected] = useState(false);

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
    Globe: <FiGlobe color={selected ? Colors.Green : Colors.AshBlack} size={24} />,
  }

  return (
    <div
      style={styles.bubbleWrapper}
      onMouseEnter={() => setSelected(!selected)}
      onMouseLeave={() => setSelected(!selected)}
    >
      <div style={{
        ...styles.iconWrapper,
        border: selected ? `3px solid ${Colors.Green}` : '3px solid white'
      }}>
        {
          /*   Conditional render for external links   */
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
      </div>
      {/* Floating Text Render Condiiton */}
      < div
        style={{ ...styles.bubbleText, visibility: !selected ? 'hidden' : '' }}
      >
        {drawer && drawer}
      </div>
    </div >
  )
};

const styles = {
  bubbleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    zIndex: 100,
  },
  iconContainer: {
    paddingTop: 8
  },
  iconWrapper: {
    textAlign: 'center',
    margin: 'auto',
    borderRadius: 30,
    height: 40,
    width: 40,
    backgroundColor: 'white'
  },
  bubbleText: {
    textAlign: 'center',
    position: 'absolute',
    backgroundColor: 'white',
    border: `1px solid ${Colors.DeepBlack}`,
    padding: '3px 5px',
    minWidth: '130px',
    marginTop: '10px',
    borderRadius: '5px',
    left: '83%',
  }
};