import React, { useState } from 'react';

//Subcomponents
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import Colors from '../Colors';

export const ExpandableDiv = ({ text, hiddenText }) => {

  const [visible, setVisible] = useState(false);

  return (
    <div
      style={{
        ...styles.expandableWrapper,
        border: visible
          ? `2px solid ${Colors.Crimson}`
          : `2px solid ${Colors.AshBlack}`
      }}
      onClick={() => setVisible(!visible)}
    >
      <div
        style={styles.headerRow}
      >
        <div style={{color: visible ? `${Colors.Crimson}` : `${Colors.AshBlack}`}}>{text}</div>
        <div style={styles.iconWrap}>{!visible
          ? <FiArrowDown size={16} color={Colors.AshBlack}/>
          : <FiArrowUp size={16} color={Colors.Crimson}/>}
        </div>
      </div>
      {visible && <div style={styles.hiddenContent}> {hiddenText} </div>}
    </div>
  )
};

const styles = {
  expandableWrapper: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '15px',
    padding: '3px 20px',
  },
  headerRow: {
    display: 'flex',
    flexDirection: 'inline-row',
    justifyContent: 'space-between'
  },
};

