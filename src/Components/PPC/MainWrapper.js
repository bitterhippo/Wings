import React from 'react';

export const MainWrapper = (props) => {
  return (
    <div style={styles.mainWrapperDiv}>
      {/* Side Bar */}
      <div style={styles.sideBarWrapper}>
        {props.children[0]}
      </div>
      {/* Content  */}
      <div style={styles.contentWrapper}>
        {props.children[1]}
      </div>
    </div>
  )
};

const styles = {
  mainWrapperDiv: {
    display: 'grid',
  },
  sideBarWrapper: {

  },
  contentWrapper: {
    marginLeft: 100
  }
};