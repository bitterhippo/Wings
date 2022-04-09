import React, { useState } from 'react';

//Subcomponents
import Colors from '../Colors';

export const BubbleDrawer = ({ content, header }) => {
  return (
    <div style={styles.bubbleDrawerWrapper}>
      <span style={styles.bubbleDrawerHeader}>
        {header}
      </span>
      {
        content
      }
    </div>
  )
};

const styles = {
  bubbleDrawerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    zIndex: 5,
  },
  bubbleDrawerHeader: {
    width: '100%',
    color: Colors.AshBlack,
    fontWeight: 'bold'
  }
};