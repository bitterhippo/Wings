import React from 'react';

//Subcomponents
import { CustomPicker } from '../../Components/Pickers/CustomPicker';
import { SelectedWrapper } from '../../Components/PPC/SelectedWrapper';

export const Online = () => {
  return (
    <>
      <CustomPicker header={"Servers"}>
        <SelectedWrapper>Check</SelectedWrapper>
        <SelectedWrapper>This</SelectedWrapper>
        <SelectedWrapper>Out</SelectedWrapper>
      </CustomPicker>
      There are currently 600 players online.
    </>
  )
};

const styles = {

};