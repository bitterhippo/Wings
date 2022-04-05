import React, { useState } from 'react';

//Subcomponents
import Colors from '../Colors';
import { Bubbles } from './Bubbles';

//Subcomponents

export const SideBar = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  const loggedOutArr = [
    { icon: "LogIn", route: "/login" },
    { icon: "SignUp", route: "/signup" },
    { icon: "Info", route: "/information" },
    { icon: "Tools", route: "/tools" },
    { icon: "Discord", route: "https://discord.com/invite/wNpVm35wbz", external: true }
  ];

  const loggedInArr = [
    { icon: "LogOut", route: "/login" },
    { icon: "Settings", route: "/settings" },
    { icon: "Info", route: "/information" },
    { icon: "Tools", route: "/tools" },
    { icon: "Discord", route: "https://discord.com/invite/wNpVm35wbz", external: true }
  ]

  const listRender = (list) => {
    return (
      <div style={styles.bubbleList}>
        {
          list.map((current) => <Bubbles
            key={current.route}
            iconName={current.icon}
            route={current.route}
            external={current.external ? true : false}
          />)
        }
      </div>
    )
  }

  return (
    <div style={styles.barWrapper}>
      {!loggedIn && listRender(loggedOutArr)}
      {loggedIn && listRender(loggedInArr)}
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
