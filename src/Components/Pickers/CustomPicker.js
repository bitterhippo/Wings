import React, { useState } from 'react';

//Subcomponents
import { SelectableLink } from '../PPC/Text/SelectableLink';

export const CustomPicker = ({ header, children }) => {

  const [open, toggleOpen] = useState(false)

  return (
    <div
    style={styles.pickerWrapper}
    onClick={() =>toggleOpen(previousState => !previousState)}
    >
    { header }
    { open && <div>{children}</div>}
    </div>
  )
};

const styles = {
  pickerWrapper: {
  }
};