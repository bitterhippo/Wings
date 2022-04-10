import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//Subcomponents
import { ContentWrapper } from '../Components/PPC/ContentWrapper';
import { InformationDefaults } from '../Defaults/Information';
import { MiniNav } from '../Components/MiniNav/MiniNav';

export const Information = () => {

  //Defaults
  const miniNavDefaults = [
    'Server Information',
    'Rules',
    'How to Connect',
    'FAQs',
    'Support'
  ];

  const locationData = useLocation();

  const [selected, setSelected] = useState(locationData.state != null
    ? locationData.state.navLink
    : miniNavDefaults[0]);

  useEffect(() => {
    if (locationData.state != null) {
      setSelected(locationData.state.navLink)
    }
  }, [locationData.state]);

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

