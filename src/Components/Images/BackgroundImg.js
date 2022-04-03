import React from 'react';

//Subcomponents
import tinyCait from "./tinyCait.png"

export const BackgroundImage = () => { 
  return (
    <img 
    style={styles.imgContainer} 
    src={tinyCait}
    />
  )
};

const styles = {
  imgContainer: {
    height: 100,
    width: 100
  }
};

