import React from 'react';

//Subcomponents
import Colors from '../Colors';

export const SideBar = () => {
  return (
    <div style={styles.barWrapper}>
      test
    </div>
  )
};

const styles = {
    barWrapper : {
      position: 'fixed',
      backgroundColor: Colors.AshBlack,
      minWidth: 100,
      height: "100%"
    }
};
