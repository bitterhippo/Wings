import React, { useState } from 'react';
import { Link } from "react-router-dom";

//Subcomponents
import Colors from '../Colors';
import { Bubbles } from './Bubbles';
import { BubbleDrawer } from './BubbleDrawer';
import { SelectedWrapper } from '../PPC/SelectedWrapper';
import { SelectableLink } from '../PPC/Text/SelectableLink';

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
              <SelectableLink
                  to="/information"
                  state={{ navLink: 'Server Information' }}
                >Server Information
              </SelectableLink>
              <SelectableLink
                  to="/information"
                  state={{ navLink: 'Rules' }}
                >Rules
              </SelectableLink>
              <SelectableLink
                  to="/information"
                  state={{ navLink: 'How to Connect' }}
                >How to Connect
              </SelectableLink>
              <SelectableLink
                  to="/information"
                  state={{ navLink: 'FAQs' }}
                >FAQs
              </SelectableLink>
              <SelectableLink
                  to="/information"
                  state={{ navLink: 'Support' }}
                >Support
              </SelectableLink>
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
              <SelectableLink
                  to="/tools"
                  state={{ navLink: 'Who is Online' }}
                >Who is Online
              </SelectableLink>
              <SelectableLink
                  to="/tools"
                  state={{ navLink: 'Mentors' }}
                >Mentors
              </SelectableLink>
              <SelectableLink
                  to="/tools"
                  state={{ navLink: 'Player Search' }}
                >Player Search
              </SelectableLink>
              <SelectableLink
                  to="/tools"
                  state={{ navLink: 'Item Search' }}
                >Item Search
              </SelectableLink>
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
