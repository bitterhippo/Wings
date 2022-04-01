import React from 'react';

//Subcomponents
import Colors from '../Colors';
import { Bubbles } from './Bubbles';

//Subcomponents

export const SideBar = () => {
  return (
    <div style={styles.barWrapper}>
      <div style={styles.bubbleList}>
        <Bubbles iconName={"LogIn"} route={"/login"}/>
        <Bubbles iconName={"SignUp"} route={"/signup"}/>
        <Bubbles iconName={"Info"} route={"/information"}/>
        <Bubbles iconName={"Tools"} route={"/tools"}/>
        <Bubbles iconName={"Settings"} route={"/settings"} />
        <Bubbles iconName={"Community"} route={"/community"}/>
        
      </div>
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
