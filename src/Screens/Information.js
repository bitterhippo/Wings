import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

//Subcomponents
import { ContentWrapper } from '../Components/PPC/ContentWrapper';
import { InformationDefaults } from '../Defaults/Information';
import { MiniNav } from '../Components/MiniNav/MiniNav';
import Colors from '../Components/Colors';

export const Information = () => {

  const locationData = useLocation();

  const [selected, setSelected] = useState(locationData.state ? locationData.state.navLink : 'Server Information');

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

