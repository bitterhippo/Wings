import React, { useState } from 'react';

//Subcomponents
import { CustomPicker } from '../../Components/Pickers/CustomPicker';
import { SelectedWrapper } from '../../Components/PPC/SelectedWrapper';
import { ToolDefaults } from '../../Defaults/Tools';

export const Online = () => {

  const [server, setServer] = useState('Wings');

  return (
    <div>
      <div style={styles.content}>
        <span>World:</span>
        <span>
          <CustomPicker header={"Servers"}>
            <SelectedWrapper>Wings</SelectedWrapper>
            <SelectedWrapper>Tonberry</SelectedWrapper>
          </CustomPicker>
        </span>
      </div>
      <div style={styles.content}>
        There are currently 600 people online
      </div>
      {ToolDefaults.WhoisOnline[server] &&
        <>
         { ToolDefaults.WhoisOnline[server][0].name }
        </>
      }
    </div>
  )
};

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 25,
  }
};