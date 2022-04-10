import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//Subcomponents
import { ContentWrapper } from '../Components/PPC/ContentWrapper';
import { ToolDefaults } from '../Defaults/Tools';
import { MiniNav } from '../Components/MiniNav/MiniNav';

export const Tools = () => {

  const miniNavDefaults = [
    `Who is Online`,
    `Mentors`,
    `Player Search`,
    `Item Search`,
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
        ToolDefaults[selected.split(" ").join("")].data
      }
    </ContentWrapper>
  )
};

