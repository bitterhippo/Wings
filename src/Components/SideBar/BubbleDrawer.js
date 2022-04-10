import React, { useState } from 'react';

//Subcomponents
import Colors from '../Colors';

export const BubbleDrawer = ({ content, header }) => {
  return (
    <div style={styles.bubbleDrawerWrapper}>
      <div style={styles.bubbleDrawerList}>
        <span style={{
          ...styles.bubbleDrawerHeader,
          borderBottom: content ? `1px solid ${Colors.AshBlack}` : ''
        }}>
          {header}
        </span>
        {
          content
        }
      </div>
    </div>
  )
};

const styles = {
  bubbleDrawerList: {
    display: 'flex',
    flexDirection: 'column',
  },
  bubbleDrawerHeader: {
    width: '100%',
    color: Colors.AshBlack,
    fontWeight: 'bold',
  }
};