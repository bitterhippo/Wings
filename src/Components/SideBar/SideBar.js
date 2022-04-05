import React, { useState } from 'react';

//Subcomponents
import Colors from '../Colors';
import { Bubbles } from './Bubbles';

//Subcomponents

export const SideBar = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  const loggedOutArr = [
    { icon: "LogIn", route: "/login"},
    { icon: "SignUp", route: "/signup"},
    { icon: "Info", route: "/information"},
    { icon: "Tools", route: "/tools"},
    { icon: "Discord", route: "/https://discord.com/invite/wNpVm35wbz", external: true}
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
      { !loggedIn && listRender(loggedOutArr) }
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
