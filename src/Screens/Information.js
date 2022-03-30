import React, { useState, useEffect } from 'react';

//Subcomponents
import { ContentWrapper } from '../Components/PPC/ContentWrapper';
import { InformationDefaults } from '../Defaults/Information';
import Colors from '../Components/Colors';

export const Information = () => {

  const [selected, setSelected] = useState('Server Information');
  const [showButton, setShowButton] = useState(false);

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behaviour: 'smooth' })
  }

  const handleButtonVisibility = () => {
    const position = window.pageYOffset;
    
    position > 150 ? setShowButton(true) : setShowButton(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleButtonVisibility)
  });

  console.log(showButton)

  //Defaults
  const miniNavDefaults = [
    'Server Information',
    'Rules',
    'How to Connect',
    'FAQs',
    'Support'
  ];

  return (
    <ContentWrapper>
      <div style={styles.miniNavTabs}>
        {
          miniNavDefaults.map(currentItem =>
            <div
              key={currentItem}
              onClick={() => setSelected(currentItem)}
              style={{
                ...styles.miniNavHeaders,
                color: selected === currentItem ? Colors.Green : Colors.AshBlack
              }}
            >
              {currentItem}
            </div>)
        }
      </div>
      <>
        {
          InformationDefaults[selected.split(" ").join("")].data
        }
      </>
      {/*       Scroll to top button          */}
      <button
        style={{ 
          ...styles.scrollButton, 
          display: showButton ? 'block' : 'none'
         }}
        onClick={() => handleScrollUp()}>
        To Top
      </button>
    </ContentWrapper>
  )
};

const styles = {
  miniNavTabs: {
    display: 'inline-flex',
    gap: 25,
    width: '100%',
    margin: 'auto auto',
    justifyContent: 'space-between'
  },
  miniNavHeaders: {
    fontSize: 20,
    color: Colors.AshBlack,
    cursor: 'pointer'
  },
  scrollButton: {
    backgroundColor: `${Colors.AshBlack}`,
    color: `${Colors.WhiteSilver}`,
    display: 'none',
    position: 'fixed',
    bottom: '5%',
    right: '5%',
    zIndex: 1,
    boxShadow: `2px 2px 5px ${Colors.AshBlack}`
  }
};
