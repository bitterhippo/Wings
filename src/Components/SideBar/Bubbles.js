import React from 'react';

//Subcomponents
import Colors from '../Colors';

export const Bubbles = () => {
  return (
    <div style={styles.bubbleWrapper}>
      T
    </div>
  )
};

const styles = {
  bubbleWrapper : {
    textAlign: 'center',
    margin: 'auto',
    borderRadius: 30,
    height: 50,
    width: 50,
    border: `1px solid ${Colors.DeepBlack}`,
    backgroundColor: 'white'
  }
};