import React, { useState } from 'react';

//Subcomponents
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import Colors from '../../Colors';

export const PlayerView = ({ playerData }) => {

  const [open, toggleOpen] = useState(false);

  let currentJob = `${playerData.currentJob.primary.join('')}/${playerData.currentJob.secondary.join('')}`

  return (
    <div style={styles.playerViewWrapper}>
      <span>{playerData.name}</span>
      <div 
      onClick={() => toggleOpen(!open)}
      style={styles.playerInformation}
      >
        <span>
          {currentJob}
        </span>
        <div>
          {!open && <FiPlusCircle color={Colors.Green} />}
          {open && <FiMinusCircle color={Colors.Crimson} />}
        </div>
      </div>
    </div>
  )
};

const styles = {
  playerViewWrapper: {
    flex: 1,
    border: `1px solid ${Colors.AshBlack}`,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 15,
    padding: '5px 15px'
  },
  styledText: {
    fontWeight: 'bold',
  },
  playerInformation: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  }
};