import React, { useState } from 'react';

//Subcomponents
import { ContentWrapper } from '../Components/PPC/ContentWrapper';
import { ToolDefaults } from '../Defaults/Tools';
import { MiniNav } from '../Components/MiniNav/MiniNav';

export const Tools = () => {

  const [selected, setSelected] = useState('');

  const miniNavDefaults = [
    `Who is Online`,
    `Mentors`,
    `Player Search`,
    `Item Search`,
  ];

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

const styles = { 

};
