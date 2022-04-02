import React, { useState } from 'react';

//Subcomponents
import { ContentWrapper } from '../Components/PPC/ContentWrapper';
import { MiniNav } from '../Components/MiniNav/MiniNav';

export const Community = () => {

  const [selected, setSelected] = useState('Forums');

  const miniNavDefaults = [
    `Forums`,
    `Discord`
  ];

  return (
    <ContentWrapper>
      <MiniNav
        arrayData={miniNavDefaults}
        stateHandler={setSelected}
        selectedNav={selected}
      />
      {
        selected
      }
    </ContentWrapper>
  )
};