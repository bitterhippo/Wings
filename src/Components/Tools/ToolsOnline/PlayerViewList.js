import React from 'react';

//Subcomponents
import { PlayerView } from './PlayerView';
import { FiArrowDownCircle, FiArrowUpCircle } from 'react-icons/fi';
import Colors from '../../Colors';

export const PlayerViewList = ({ serverData }) => {

  

  return (
    <div style={styles.playerViewList}>
      {
        serverData.map((currentPlayer, index) => <PlayerView 
        playerData={currentPlayer}
        key={index}/>
        )
      }
    </div>
  ) 
};

const styles = {
  playerViewList: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};