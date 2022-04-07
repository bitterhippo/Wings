import React, { useState } from 'react';

//Subcomponents
import Colors from '../Colors';
import { Bubbles } from './Bubbles';
import { BubbleDrawer } from './BubbleDrawer';

//Subcomponents

export const SideBar = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  //Default Data

  const loggedOutArr = [
    {
      icon: "LogIn",
      route: "/login",
      drawer:
        <BubbleDrawer
          header={"Log In"}
        />
    },
    {
      icon: "SignUp",
      route: "/signup",
      drawer:
        <BubbleDrawer
          header={"Sign Up"}
        />
    },
    {
      icon: "Info",
      route: "/information",
      drawer:
        <BubbleDrawer
          header={"Info"}
          content={<>test</>}
        />
    },
    {
      icon: "Tools",
      route: "/tools",
      drawer:
        <BubbleDrawer
          header={"Tools"}
          content={<>test</>}
        />
    },
    {
      icon: "Discord",
      route: "https://discord.com/invite/wNpVm35wbz",
      external: true,
      drawer:
        <BubbleDrawer
          header={"Discord"}
        />
    }
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
            drawer={current.drawer ? current.drawer : false}
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
