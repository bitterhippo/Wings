import React from 'react';

//Subcomponents
import { CustomPicker } from '../../Components/Pickers/CustomPicker';

export const Online = () => {
  return (
    <>
      <CustomPicker header={"Servers"}>
        <>Check</>
        <>This</>
        <>Out</>
      </CustomPicker>
      There are currently 600 players online.
    </>
  )
};

const styles = {

};