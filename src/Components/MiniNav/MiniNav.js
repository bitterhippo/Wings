import React from 'react';

//Subcomponents
import Colors from '../Colors';

export const MiniNav = ({ arrayData, stateHandler, selectedNav }) => {

  return (
    <div style={styles.miniNavTabs}>
      {
        arrayData.map(currentItem =>
          <div
            key={currentItem}
            onClick={() => stateHandler(currentItem)}
            style={{
              ...styles.miniNavHeaders,
              color: selectedNav === currentItem ? Colors.Green : Colors.AshBlack
            }}
          >
            {currentItem}
          </div>)
      }
    </div>
  )
}

const styles = {
  miniNavTabs: {
    display: 'inline-flex',
    gap: 25,
    width: '100%',
    margin: 'auto auto',
    justifyContent: 'space-between'
  },
  miniNavHeaders: {
    fontSize: 20,
    color: Colors.AshBlack,
    cursor: 'pointer'
  }
};