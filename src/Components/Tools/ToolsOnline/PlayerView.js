import React, { useState } from 'react';

//Subcomponents
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';
import Colors from '../../Colors';

export const PlayerView = ({ playerData }) => {

  const [open, toggleOpen] = useState(false);
  const [selected, toggleSelected] = useState(false);

  let currentJob = `${playerData.currentJob.primary.join('')}/${playerData.currentJob.secondary.join('')}`

  let colorBarrel = `${selected ? 'white' : Colors.AshBlack}`

  //Character Information Panel

  let jobsList = Object.keys(playerData.jobs)

  return (
    <>
      <div style={{ ...styles.playerViewWrapper, backgroundColor: selected ? Colors.Green : '' }}
        onMouseEnter={() => toggleSelected(!selected)}
        onMouseLeave={() => toggleSelected(!selected)}
        onClick={() => toggleOpen(!open)}
      >
        <span style={{ ...styles.styledText, color: colorBarrel }}>
          {playerData.name}
        </span>
        <div
          style={styles.playerInformation}
        >
          <span style={{ ...styles.styledText, color: colorBarrel }}>
            {currentJob}
          </span>
          <div>
            {!open && <FiPlusCircle color={colorBarrel} fontSize={16} />}
            {open && <FiMinusCircle color={colorBarrel} fontSize={16} />}
          </div>
        </div>
      </div>
      <div style={styles.characterInfoWrapper}>
        <h3>Jobs</h3>
        {
          jobsList.map((currentJob, index) => 
          <div key={currentJob}>
            {jobsList[index]} : {playerData.jobs[currentJob]}
          </div>)
        }
      </div>
    </>
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
    padding: '5px 15px',
    cursor: 'pointer'
  },
  styledText: {
    fontWeight: 'bold',
  },
  playerInformation: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10
  },
  characterInfoWrapper: {

  }
};