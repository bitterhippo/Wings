import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

//Subcomponents
import { ContentWrapper } from '../Components/PPC/ContentWrapper';
import { InformationDefaults } from '../Defaults/Information';
import { MiniNav } from '../Components/MiniNav/MiniNav';
import Colors from '../Components/Colors';

export const Information = () => {

  const [selected, setSelected] = useState('Server Information');

  console.log(location.state);

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
      <MiniNav
        arrayData={miniNavDefaults}
        stateHandler={setSelected}
        selectedNav={selected}
      />
      {
        InformationDefaults[selected.split(" ").join("")].data
      }
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
  }
};
