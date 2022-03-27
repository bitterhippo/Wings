import React from 'react';

export const ContentWrapper = props => {
  return (
    <div style={styles.contentWrapper}>
      {props.children}
    </div>
  )
};

const styles = {
  contentWrapper: {
    width: '80%',
    margin: '100px auto 0px auto',
  }
};