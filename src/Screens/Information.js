import React, { useState } from 'react';

//Subcomponents
import { ContentWrapper } from '../Components/PPC/ContentWrapper';
import { InformationDefaults } from '../Defaults/Information';

export const Information = () => {

  const [selected, setSelected] = useState('Server Information')

  return (
    <div>
      <div style={{ display: selected === 'Server Information' ? '' : 'none' }}>
        <ContentWrapper>
          {InformationDefaults.ServerInformation.data}
        </ContentWrapper>

      </div>
      <div style={{ display: selected === 'Server Infromation' ? '' : 'none' }}>
        <ContentWrapper>
          {InformationDefaults.Customizations.data}
        </ContentWrapper>
      </div>
    </div>
  )
};

const styles = {

};
