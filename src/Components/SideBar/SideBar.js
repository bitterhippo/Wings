import React, { useState } from 'react';
import { Link } from "react-router-dom";

//Subcomponents
import Colors from '../Colors';
import { Bubbles } from './Bubbles';
import { BubbleDrawer } from './BubbleDrawer';
import { SelectedWrapper } from '../PPC/SelectedWrapper';

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
          content={
            <>
              <SelectedWrapper>
                <Link to={{pathname: "/information", state: { selected: 'Rules' }}}>Server Information</Link>
              </SelectedWrapper>
              <SelectedWrapper>Rules</SelectedWrapper>
              <SelectedWrapper>How to Connect</SelectedWrapper>
              <SelectedWrapper>FAQs</SelectedWrapper>
              <SelectedWrapper>Support</SelectedWrapper>
            </>
          }
        />
    },
    {
      icon: "Tools",
      route: "/tools",
      drawer:
        <BubbleDrawer
          header={"Tools"}
          content={
            <>
              <SelectedWrapper>Who is Online</SelectedWrapper>
              <SelectedWrapper>Mentors</SelectedWrapper>
              <SelectedWrapper>Player Search</SelectedWrapper>
              <SelectedWrapper>Item Search</SelectedWrapper>
            </>
          }
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
