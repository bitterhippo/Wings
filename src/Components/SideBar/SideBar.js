import React from 'react';

//Subcomponents
import Colors from '../Colors';
import { Bubbles } from './Bubbles';

export const SideBar = () => {
  return (
    <div style={styles.barWrapper}>
      <div style={styles.bubbleList}>
        <Bubbles />
      </div>
    </div>
  )
};

const styles = {
  barWrapper: {
    position: 'fixed',
    backgroundColor: Colors.AshBlack,
    minWidth: 100,
    height: "100%",
    borderRight: `2px solid ${Colors.DeepBlack}`
  },
  bubbleList: {
    margin: '50% auto',
  }
};
