import React, { useState } from 'react';

//Subcomponents
import Colors from '../Colors';
import { Bubbles } from './Bubbles';

//Subcomponents

export const SideBar = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  const loggedOutArr = [
    <Bubbles iconName={"LogIn"} route={"/login"} />,
    <Bubbles iconName={"SignUp"} route={"/signup"} />,
    <Bubbles iconName={"Info"} route={"/information"} />,
    <Bubbles iconName={"Tools"} route={"/tools"} />,
    <Bubbles iconName={"Discord"} external={true} route={"https://discord.com/invite/wNpVm35wbz"} />
  ];

  const loggedInArr = [
    <Bubbles iconName={"LogIn"} route={"/login"} />,
    <Bubbles iconName={"Info"} route={"/information"} />,
    <Bubbles iconName={"Tools"} route={"/tools"} />,
    <Bubbles iconName={"Settings"} route={"/settings"} />,
    <Bubbles iconName={"Discord"} external={true} route={"https://discord.com/invite/wNpVm35wbz"} />
  ]

  const listRender = (list) => {
    return (
      <div style={styles.bubbleList}>
        {
          list.map((current) => <Bubbles
            key={current}
            iconName={current.icon}
            route={current.route}
          />)
        }
      </div>
    )
  }

  return (
    <div style={styles.barWrapper}>
      { loggedIn && listRender(loggedOutArr) }
    </div>
  )
};

const styles = {
  barWrapper: {
    position: 'fixed',
    backgroundColor: Colors.AshBlack,
    minWidth: 75,
    height: "100%",
    borderRight: `2px solid ${Colors.DeepBlack}`
  },
  bubbleList: {
    margin: '100px auto 0px auto',
    display: 'flex',
    flexDirection: 'column',
    gap: 35
  }
};
