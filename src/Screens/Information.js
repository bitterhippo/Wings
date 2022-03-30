import React, { useState } from 'react';

//Subcomponents
import { ContentWrapper } from '../Components/PPC/ContentWrapper';
import { InformationDefaults } from '../Defaults/Information';
import Colors from '../Components/Colors';

export const Information = () => {

  const [selected, setSelected] = useState('Server Information');

  console.log(`%c Selected Value : ${selected}`, 'color: orange');

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
    </ContentWrapper>
  )
};

const styles = {
  miniNavTabs: {
    display: 'inline-flex',
    gap: 25,
    width: '90%',
    margin: 'auto auto',
    justifyContent: 'space-between'
  },
  miniNavHeaders: {
    fontSize: 20,
    color: Colors.AshBlack,
    cursor: 'pointer'
  }
};
