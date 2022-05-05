import React, { useState } from 'react';

//Subcomponents
import { CustomPicker } from '../../Components/Pickers/CustomPicker';
import { SelectedWrapper } from '../../Components/PPC/SelectedWrapper';
import { ToolDefaults } from '../../Defaults/Tools';
import { PlayerViewList } from '../../Components/Tools/ToolsOnline/PlayerViewList';

export const Online = () => {

  const [server, setServer] = useState('Servers');

  return (
    <div>
      <div style={styles.content}>
        <span>World:</span>
        {/* Picker Wrapper & Items */}
        <span style={styles.pickerWrapper}>
          <CustomPicker header={server}>
            { server !== 'Wings' && <SelectedWrapper>
              <span onClick={() => setServer('Wings')}>Wings</span></SelectedWrapper> }
            { server !== 'Tonberry' && <SelectedWrapper>
              <span onClick={() => setServer('Tonberry')}>Tonberry</span></SelectedWrapper> }
          </CustomPicker>
        </span>
      </div>
      <div style={styles.content}>
        {server !== 'Servers' && <PlayerViewList serverData={ToolDefaults.WhoisOnline[server]} />}
        {server === 'Servers' && <div> Please selected a server to see how many players are actively online.</div>}
      </div>
    </div>
  )
};

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'row',
    margin: '50px 0'
  },
  pickerWrapper: {
    marginTop: '-3px',
    marginLeft: 5
  }
};