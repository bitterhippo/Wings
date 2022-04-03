import React from 'react';

//Subcomponents
import tinyCait from "./tinyCait.png"

export const BackgroundImage = () => {
  return (
    <div style={styles.imgWrapper}>
      <img
        style={styles.imgContainer}
        src={tinyCait}
      />
    </div>
  )
};

const styles = {
  imgContainer: {
    height: '100%',
    width: '100%',
    opacity: ".2",
  },
  imgWrapper: {
    position: 'absolute',
    zIndex: -1,
    top: "235px",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
};

