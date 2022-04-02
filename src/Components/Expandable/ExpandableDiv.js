import React, { useState } from 'react';

const ExpandableDiv = ({ text, hiddenText }) => {

  const [visible, setVisible] = useState(false);

  return (
    <div
      onClick={() => setVisible(!visible)}
    >
      {text}
      <div style={{ display: visible ? 'show' : 'none' }}>
        {hiddenText}
      </div>
    </div>
  )
};

const styles = {

};