import React, { useState, useEffect } from 'react';

//Subcomponents
import Colors from '../Colors';
import { BackgroundImage } from '../Images/BackgroundImg';

export const ContentWrapper = props => {

  const [showButton, setShowButton] = useState(false);

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behaviour: 'smooth' })
  };

  const handleButtonVisibility = () => {
    const position = window.pageYOffset;

    position > 150 ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleButtonVisibility)
  });

  return (
    <div style={styles.contentWrapper}>
      <BackgroundImage />
      {props.children}
      {/*       Scroll to top button          */}
      <button
        style={{
          ...styles.scrollButton,
          display: showButton ? 'block' : 'none'
        }}
        onClick={() => handleScrollUp()}>
        Top
      </button>
    </div>
  )
};

const styles = {
  contentWrapper: {
    position: 'relative',
    width: '80%',
    margin: '100px auto 0px auto',
    paddingBottom: '100px',
  },
  scrollButton: {
    backgroundColor: `${Colors.AshBlack}`,
    color: `${Colors.WhiteSilver}`,
    display: 'none',
    height: 50,
    width: 50,
    borderRadius: 50,
    position: 'fixed',
    bottom: '5%',
    right: '5%',
    zIndex: 1,
  }
};