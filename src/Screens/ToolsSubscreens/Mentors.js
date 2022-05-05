import React, { useState } from 'react';

//Subcomponents
import { CustomPicker } from '../../Components/Pickers/CustomPicker';
import { SelectedWrapper } from '../../Components/PPC/SelectedWrapper';

export const Mentors = () => {

  const [server, setServer] = useState('Servers');

  return (
    <div style={{ ...styles.content, display: 'flex', flexDirection: 'column' }}>
      Mentors are volunteers who help assist new players to either Wings or FFXI in general.
      Mentors are not affiliated with Wings staff and any opinions and beliefs shared are their own.
      Please note that mentors are not game masters and do not have any special privileges other than the will to help.
      Mentors may be contacted via /tell in-game.
      <div style={styles.pickerRow}>
        <span>World:</span>
        {/* Picker Wrapper & Items */}
        <span style={styles.pickerWrapper}>
          <CustomPicker header={server}>
            {server !== 'Wings' && <SelectedWrapper>
              <span onClick={() => setServer('Wings')}>Wings</span></SelectedWrapper>}
            {server !== 'Tonberry' && <SelectedWrapper>
              <span onClick={() => setServer('Tonberry')}>Tonberry</span></SelectedWrapper>}
          </CustomPicker>
        </span>
      </div>
      <span style={styles.content}>There are currently 0 mentors online.</span>
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
  },
  pickerRow: {
    marginTop: 25,
    display: 'flex',
    flexDirection: 'row',
  }
};