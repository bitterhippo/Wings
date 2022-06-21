import React from 'react';

//Subcomponents
import tinyCait from "./tinyCait.png"

export const BackgroundImage = () => {
  return (
    <div>
      <div style={styles.imgWrapper}>
        <img
          style={styles.imgContainer}
          src={tinyCait}
        />
      </div>
    </div>
  )
};

const styles = {
  imgContainer: {
    height: '100%',
    width: '100%',
  },
  imgWrapper: {
    position: 'absolute',
    zIndex: -2,
    top: "500px",
    left: "50%",
    transform: "translate(-50%, -50%)",
    opacity: '.2'
  }
};

