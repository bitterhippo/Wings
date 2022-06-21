import React from 'react';

//Subcomponent
import wingsbanner from "./wingsbanner.png"

export const HeaderImg = () => {
  return (
    <div style={styles.headerImgWrapper}>
      <img 
      style={styles.headerImg}
      src={wingsbanner}
      />
    </div>
  )
};

const styles = {
  headerImg: {
    height: '100%',
    width: '100%',
    objectFit: 'contain'
  }
};


